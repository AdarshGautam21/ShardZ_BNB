// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.20;

import "@openzeppelin/contracts@5.0.2/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts@5.0.2/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts@5.0.2/access/Ownable.sol";

contract Asset is ERC20, ERC20Burnable, Ownable {
    
    constructor(string memory _name, string memory _symbol)
        ERC20(_name, _symbol)
        Ownable(msg.sender)
    {}


    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    function transfer_to(address from, address to, uint256 amount) public onlyOwner returns (bool){
        return transferFrom(from, to, amount);
    }
}
