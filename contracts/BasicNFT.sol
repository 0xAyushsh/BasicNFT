// SPDX-License-Identifier: MIT

pragma solidity  ^0.8.0;


import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

error OnlyOwnerIsAllowed();


contract BasicNFT is ERC721 {

    using Strings for uint256;

    string public constant baseURI = "https://gateway.pinata.cloud/ipfs/QmQxCPyEJXz3XoWMH1LHGSnaPZVF7TmYaw2SszFFH6jRHC/";// CID of Metadata
    string public constant baseExtension = ".json";
    uint public tokenCounter = 1;
    address public owner;
    address public reciever = 0xC894C58A6c83B2426D4cB929B36565679c846b44 ;

    modifier onlyOwner(){
        if(msg.sender != owner) revert OnlyOwnerIsAllowed();
        _;
    }

    constructor() ERC721("Peter Griffin", "PG") {
        owner = msg.sender;
        mintNFT(msg.sender, tokenCounter);
        _transfer(msg.sender, reciever, tokenCounter);
        
    }

    function mintNFT(address minter, uint _tokenID) public onlyOwner payable {
        // msg.sender - who is calling the function
        _safeMint(minter, _tokenID);
     
    }

    function tokenURI(uint tokenId) public view virtual override returns (string memory) {
            return bytes(baseURI).length != 0 ?
                string(abi.encodePacked(baseURI, tokenId.toString() , baseExtension)) : "";
        }

    function getTokenCounter() public view returns(uint){
        return tokenCounter;
    }

}