// noinspection ES6ConvertVarToLetConst,JSDuplicatedDeclaration

import { ethers } from "hardhat";
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import {TrustlessVoting, TrustlessVoting__factory} from "../typechain-types";

chai.use(chaiAsPromised);
const expect = chai.expect;


describe("Test", () => {

    let contract: TrustlessVoting
    let owner: SignerWithAddress
    let voter1: SignerWithAddress
    let voter2: SignerWithAddress
    let voter3: SignerWithAddress
    let addrs: SignerWithAddress[]

    beforeEach(async () => {
        const contractFactory = (await ethers.getContractFactory("TrustlessVoting")) as TrustlessVoting__factory

        [owner, voter1, voter2, voter3, ...addrs] = await ethers.getSigners()

        contract = await contractFactory.deploy()
        await contract.deployed()
    })


    it("Basic Test", async () => {
        await contract.vote(1);
        expect(await contract.votesCounter(1)).to.be.equals(1)
        expect(await contract.results(1)
            .then( array => array.map( bn => bn.toNumber())))
            .deep.equals([1])
    })


    it("Several votes", async () => {
        await contract.connect(voter1).vote(1)
        await contract.connect(voter2).vote(1)
        await contract.connect(voter3).vote(2)

        expect(await contract.votesCounter(1)).to.be.equals(2)
        expect(await contract.results(2)
            .then( array => array.map( bn => bn.toNumber())))
            .deep.equals([2,1])
    })


    it("Double voting", async () => {
        await contract.connect(voter1).vote(1)
        await expect(contract.connect(voter1).vote(2))
            .revertedWith("This address has already been voted")
    })
})
