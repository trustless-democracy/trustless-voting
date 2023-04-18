import * as dotenv from "dotenv"
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

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
  }
};

export default config;
