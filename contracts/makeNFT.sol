pragma solidity ^0.8.0;
//SPDX-License-Identifier: MIT
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "./interfaces/IContentHash.sol";

contract VideoNFT is ERC721, IContentHash {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    struct Video {
        string name;
        string description;
        string videoCID;
        string thumbnailCID;
    }

    mapping(uint256 => Video) private _videos;

    constructor() ERC721("VideoNFT", "VNFT") {}

    function mintVideo(
        string memory name,
        string memory description,
        string memory videoCID,
        string memory thumbnailCID
    ) public returns (uint256) {
        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        _mint(msg.sender, newItemId);

        _videos[newItemId] = Video(name, description, videoCID, thumbnailCID);

        return newItemId;
    }

    function getVideo(uint256 tokenId)
        public
        view
        returns (
            string memory name,
            string memory description,
            string memory videoCID,
            string memory thumbnailCID
        )
    {
        Video storage video = _videos[tokenId];
        return (video.name, video.description, video.videoCID, video.thumbnailCID);
    }

    function setVideoHash(uint256 tokenId, string memory hash) public {
        require(_exists(tokenId), "Token does not exist");
        _setTokenURI(tokenId, hash);
    }

    function getNFTDetails(uint256 tokenId)
        public
        view
        returns (
            uint256,
            address,
            address,
            uint256
        )
    {
        require(_exists(tokenId), "Token does not exist");
        return (tokenId, address(this), _tokenOwner(tokenId), tokenId);
    }
}
