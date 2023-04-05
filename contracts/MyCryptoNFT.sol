// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "hardhat/console.sol";

contract MyCryptoNFT is ERC721 {
    constructor() ERC721("MyToken", "MTK") {
        console.log("msg.sender", msg.sender); //msg.sender is the address that initially deploys a contract
    }
}