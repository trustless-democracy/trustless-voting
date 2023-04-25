import "@nomiclabs/hardhat-waffle"
import "@nomiclabs/hardhat-etherscan"
import '@typechain/hardhat'
import dotenv from 'dotenv'
import { HardhatUserConfig } from "hardhat/config"

dotenv.config()

const DEPLOYER_PRIVATE_KEY = process.env.DEPLOYER_PRIVATE_KEY

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    polygonMainnet: {
      url: "https://polygon-rpc.com",
      accounts: DEPLOYER_PRIVATE_KEY !== undefined ? [DEPLOYER_PRIVATE_KEY] : []
    },
    mumbai: {
      chainId: 80001,
      url: process.env.MUMBAI_URL || "https://rpc-mumbai.maticvigil.com",
      accounts: DEPLOYER_PRIVATE_KEY !== undefined ? [DEPLOYER_PRIVATE_KEY] : []
    },
    fuji: {
      url: 'https://api.avax-test.network/ext/bc/C/rpc',
      chainId: 43113,
      accounts: DEPLOYER_PRIVATE_KEY !== undefined ? [DEPLOYER_PRIVATE_KEY] : []
    },
    goerli: {
      url: 'https://goerli.infura.io/v3/b4dec126112842ec965c814fc1d650d6',
      chainId: 5,
      accounts: DEPLOYER_PRIVATE_KEY !== undefined ? [DEPLOYER_PRIVATE_KEY] : []
    },
  },
  etherscan: {
    // yarn hardhat verify --network <NETWORK> <CONTRACT_ADDRESS> <CONSTRUCTOR_PARAMETERS>
    apiKey: {
      // npx hardhat verify --list-networks
      polygon: process.env.POLYGONSCAN_API_KEY,
      polygonMumbai: process.env.POLYGONSCAN_API_KEY,
    },
    customChains: [],
  },
};

export default config;