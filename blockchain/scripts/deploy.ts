import * as fs from 'fs'
import { ethers } from "hardhat";
import hre from 'hardhat'
import {TrustlessVoting__factory} from "../typechain-types";

async function main() {
    // const signers = await ethers.getSigners()

    const trustlessVotingFactory = await ethers.getContractFactory("TrustlessVoting") as TrustlessVoting__factory
    const trustlessVoting = await trustlessVotingFactory.deploy()
    console.log(`TrustlessVoting address: ${trustlessVoting.address}`)

    fs.writeFileSync(`../app/src/contract/address.${hre.network.name}.json`, JSON.stringify({
        TrustlessVoting: trustlessVoting.address
    }))
    fs.writeFileSync(`../app/src/contract/TrustlessVoting.json`, fs.readFileSync("./artifacts/contracts/TrustlessVoting.sol/TrustlessVoting.json"))
    fs.writeFileSync(`../app/src/contract/TrustlessVoting.ts`, fs.readFileSync("./typechain-types/contracts/TrustlessVoting.ts"))
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});