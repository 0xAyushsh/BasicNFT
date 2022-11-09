# BasicNFT
This is a basic NFT smart contract that mints the NFT token and transfer its value to the address specified in the smart contract.

## Steps

1. Open terminal and navigate to the source folder.

2.Run npm install to install all the required dependencies
```
npm install
```

3.Create .evn file in the root folder and add 
```
QUICKNODE_HTTP_URL=[Your_QuickNode_HTTP_Provider_URL]
PRIVATE_KEY=[Your_Private_Key]
```

4. Compile the source code
```
npx hardhat compile
```

5. Deploy the source code into the Goerli Network
```
npx hardhat deploy --tags basicNFT --network goerli
```

6. Copy the NFT address printed on the console and save it for further reference. You can view the NFT contract on https://goerli.etherscan.io by searching NFT address printed on the console.

