// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {IERC20} from "@openzeppelin/contracts/interfaces/IERC20.sol";
import {IERC721} from "@openzeppelin/contracts/interfaces/IERC721.sol";
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/SafeERC20.sol";
import {SafeERC721} from "@openzeppelin/contracts/token/ERC721/SafeERC721.sol";

import {Diamond} from "@solarity/solidity-lib/diamond/Diamond.sol";
import {DiamondERC20} from "@solarity/solidity-lib/diamond/tokens/ERC20/DiamondERC20.sol";

import {ITokenF} from "../interfaces/ITokenF.sol";
import {IKYCCompliance} from "../interfaces/IKYCCompliance.sol";
import {IRegulatoryCompliance} from "../interfaces/IRegulatoryCompliance.sol";

import {AgentAccessControl} from "./AgentAccessControl.sol";
import {TokenFStorage} from "./storages/TokenFStorage.sol";
import {RegulatoryComplianceStorage} from "./storages/RegulatoryComplianceStorage.sol";
import {KYCComplianceStorage} from "./storages/KYCComplianceStorage.sol";

abstract contract TokenF is
    ITokenF,
    TokenFStorage,
    Diamond,
    DiamondERC20,
    AgentAccessControl
{
    using SafeERC20 for IERC20;
    using SafeERC721 for IERC721;

    bytes4 public constant TRANSFER_SELECTOR = this.transfer.selector;
    bytes4 public constant TRANSFER_FROM_SELECTOR = this.transferFrom.selector;
    bytes4 public constant MINT_SELECTOR = this.mint.selector;
    bytes4 public constant BURN_SELECTOR = this.burn.selector;
    bytes4 public constant FORCED_TRANSFER_SELECTOR =
        this.forcedTransfer.selector;
    bytes4 public constant RECOVERY_SELECTOR = this.recovery.selector;

    IERC721 public nft;
    address public nftOwner;
    string public nftCID;
    uint256 public nftTokenId;

    constructor(
        address regulatoryCompliance_,
        address kycCompliance_,
        address nft_,
        string memory cid_,
        uint256 tokenId_
    ) IERC721(nft_) {
        __TokenF_init(
            regulatoryCompliance_,
            kycCompliance_,
            new bytes(0),
            new bytes(0)
        );
        nft = IERC721(nft_);
        nftOwner = nft.ownerOf(tokenId_);
        nftCID = cid_;
        nftTokenId = tokenId_;
    }

    function setNFT(
        address nft_,
        string memory cid_,
        uint256 tokenId_
    ) external onlyOwner {
        nft = IERC721(nft_);
        nftOwner = nft.ownerOf(tokenId_);
        nftCID = cid_;
        nftTokenId = tokenId_;
    }

    /// @inheritdoc IERC20
    function transfer(
        address to_,
        uint256 amount_
    ) public virtual override(DiamondERC20, IERC20) returns (bool) {
        require(
            msg.sender == nftOwner,
            "TokenF: Only NFT owner can transfer tokens"
        );
        _canTransfer(msg.sender, to_, amount_, address(0));
        _isKYCed(msg.sender, to_, amount_, address(0));

        super.transfer(to_, amount_);

        _transferred(msg.sender, to_, amount_, address(0));

        return true;
    }

    /// @inheritdoc IERC20
    function transferFrom(
        address from_,
        address to_,
        uint256 amount_
    ) public virtual override(DiamondERC20, IERC20) returns (bool) {
        require(
            from_ == nftOwner,
            "TokenF: Only NFT owner can transfer tokens"
        );
        _canTransfer(from_, to_, amount_, msg.sender);
        _isKYCed(from_, to_, amount_, msg.sender);

        super.transferFrom(from_, to_, amount_);

        _transferred(from_, to_, amount_, msg.sender);

        return true;
    }

    /// @inheritdoc ITokenF
    function mint(
        address account_,
        uint256 amount_
    ) public virtual override onlyRole(_mintRole()) returns (bool) {
        require(
            msg.sender == nftOwner,
            "TokenF: Only NFT owner can mint tokens"
        );
        _canTransfer(address(0), account_, amount_, msg.sender);
        _isKYCed(address(0), account_, amount_, msg.sender);

        super._mint(account_, amount_);

        _transferred(address(0), account_, amount_, msg.sender);

        return true;
    }

    /// @inheritdoc ITokenF
    function burn(
        address account_,
        uint256 amount_
    ) public virtual override onlyRole(_burnRole()) returns (bool) {
        require(
            msg.sender == nftOwner,
            "TokenF: Only NFT owner can burn tokens"
        );
        _canTransfer(account_, address(0), amount_, msg.sender);
        _isKYCed(account_, address(0), amount_, msg.sender);

        super._burn(account_, amount_);

        _transferred(account_, address(0), amount_, msg.sender);

        return true;
    }

    /// @inheritdoc ITokenF
    function forcedTransfer(
        address from_,
        address to_,
        uint256 amount_
    ) public virtual override onlyRole(_forcedTransferRole()) returns (bool) {
        require(
            msg.sender == nftOwner,
            "TokenF: Only NFT owner can force transfer tokens"
        );
        _canTransfer(from_, to_, amount_, msg.sender);
        _isKYCed(from_, to_, amount_, msg.sender);

        super._transfer(from_, to_, amount_);

        _transferred(from_, to_, amount_, msg.sender);

        return true;
    }

    /// @inheritdoc ITokenF
    function recovery(
        address oldAccount_,
        address newAccount_
    ) public virtual override onlyRole(_recoveryRole()) returns (bool) {
        require(
            msg.sender == nftOwner,
            "TokenF: Only NFT owner can recover tokens"
        );
        uint256 oldBalance_ = balanceOf(oldAccount_);

        _canTransfer(oldAccount_, newAccount_, oldBalance_, msg.sender);
        _isKYCed(oldAccount_, newAccount_, oldBalance_, msg.sender);

        super._transfer(oldAccount_, newAccount_, oldBalance_);

        _transferred(oldAccount_, newAccount_, oldBalance_, msg.sender);

        return true;
    }

    /// @inheritdoc ITokenF
    function diamondCut(
        Facet[] memory modules_
    ) public virtual override onlyRole(_diamondCutRole()) {
        diamondCut(modules_, address(0), "");
    }

    /// @inheritdoc ITokenF
    function diamondCut(
        Facet[] memory modules_,
        address initModule_,
        bytes memory initData_
    ) public virtual override onlyRole(_diamondCutRole()) {
        _diamondCut(modules_, initModule_, initData_);
    }

    function _transferred(
        address from_,
        address to_,
        uint256 amount_,
        address operator_
    ) internal virtual {
        try
            IRegulatoryCompliance(address(this)).transferred(
                Context(
                    bytes4(bytes(msg.data[:4])),
                    from_,
                    to_,
                    amount_,
                    operator_,
                    ""
                )
            )
        {} catch {
            revert("TokenF: transferred reverted");
        }
    }

    function _canTransfer(
        address from_,
        address to_,
        uint256 amount_,
        address operator_
    ) internal view virtual {
        try
            IRegulatoryCompliance(address(this)).canTransfer(
                Context(
                    bytes4(bytes(msg.data[:4])),
                    from_,
                    to_,
                    amount_,
                    operator_,
                    ""
                )
            )
        returns (bool canTransfer_) {
            require(canTransfer_, "TokenF: cannot transfer");
        } catch {
            revert("TokenF: canTransfer reverted");
        }
    }

    function _isKYCed(
        address from_,
        address to_,
        uint256 amount_,
        address operator_
    ) internal view virtual {
        try
            IKYCCompliance(address(this)).isKYCed(
                Context(
                    bytes4(bytes(msg.data[:4])),
                    from_,
                    to_,
                    amount_,
                    operator_,
                    ""
                )
            )
        returns (bool isKYCed_) {
            require(isKYCed_, "TokenF: KYC failed");
        } catch {
            revert("TokenF: isKYCed reverted");
        }
    }
}
