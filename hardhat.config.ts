// require("@nomicfoundation/hardhat-toolbox");
// require("dotenv").config({ path: ".env" });


// module.exports = {
//   solidity: "0.8.9",
//   networks: {
//     goerli: {
//       url: QUICKNODE_HTTP_URL,
//       accounts: [PRIVATE_KEY],
//     },
//   },
// };
import { HardhatUserConfig } from "hardhat/config"
import "@nomicfoundation/hardhat-toolbox"
import "hardhat-deploy"
import "dotenv/config"

const QUICKNODE_HTTP_URL = process.env.QUICKNODE_HTTP_URL || ""
const PRIVATE_KEY = process.env.PRIVATE_KEY || ""

const config: HardhatUserConfig = {
    solidity: {
        compilers: [{ version: "0.8.9" }],
    },
    defaultNetwork: "goerli",
    networks: {
        goerli: {
            url: QUICKNODE_HTTP_URL,
            chainId: 5,
            accounts: [PRIVATE_KEY],
        },
    },
    namedAccounts: {
        deployer: {
            default: 0,
        },
    },
}

export default config