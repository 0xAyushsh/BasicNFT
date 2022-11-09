import { DeployFunction } from "hardhat-deploy/dist/types"
import { HardhatRuntimeEnvironment } from "hardhat/types"
import { developmentChains, VERIFICATION_BLOCK_CONFIRMATIONS } from "../helper-hardhat-config"


const deployBasicNFT: DeployFunction = async (
    hre: HardhatRuntimeEnvironment
) => {

    //Getting infromtaion from hardhat-config.ts file
    const { getNamedAccounts, network, ethers, deployments } = hre

    //Getting deploy and log function from deployments 
    const { deploy, log } = deployments

    //Getting deployer config from named accounts config in hardhat-config.ts file
    const { deployer } = await getNamedAccounts()

    const args: any[] = []

    log("Start Deployment of Auction contract")

    const confirmations = developmentChains.includes(network.name)
        ? 1
        : VERIFICATION_BLOCK_CONFIRMATIONS

        //Deploying BasicNFT.sol smart contract using deploy function
    const basicNFT = await deploy("BasicNFT", {
        //Account from which we want to do the transaction
        from: deployer,
        args: args,
        log: true,
        waitConfirmations: confirmations,
    })

    log(`Deployment of BasicNFT contract Successful!`)

}


export default deployBasicNFT
deployBasicNFT.tags = ["all", "basicNFT"]