import {useAccount, useNetwork, useSwitchNetwork} from 'wagmi'

import {Connect} from '../components'
import {projectId} from "../wagmi";
import {getSocialWalletOwner, getZeroDevSigner} from "@zerodevapp/sdk";
import {BigNumber, Contract, ethers} from "ethers";
import {SocialWallet} from "@zerodevapp/social-wallet";
import {calculateMerkleRootAndZKProof, generateCommitment} from "zk-merkle-tree";
import contracts from '../contracts.mumbai.json'
// import contracts from '../contracts.polygon.json'
import {useEffect, useState} from "react";
import {ZeroDevSigner} from "@zerodevapp/sdk/dist/src/ZeroDevSigner";

const contractABI = [
    'function registerCommitment(uint256 _uniqueHash, uint256 _commitment) external',
    'function vote(uint _option, uint256 _nullifier, uint256 _root, uint[2] memory _proof_a, uint[2][2] memory _proof_b, uint[2] memory _proof_c) external',
    "function getOptionCounter(uint _option) external view returns (uint)"
]

type Commitment = {
    nullifier: string;
    secret: string;
    commitment: any;
    nullifierHash: any;
}

const TREE_LEVELS = 20;

function Page() {
    const {isConnected, address} = useAccount()
    const [registrationInProcess, setRegistrationInProcess] = useState(false)
    const [votingInProcess, setVotingInProcess] = useState(false)
    const [registered, setRegistered] = useState(false)
    const [voted, setVoted] = useState<string>()
    const [commitment, setCommitment] = useState<Commitment>()
    const [results, setResults] = useState<Array<number>>()
    // const { chains, error, isLoading, pendingChainId, switchNetwork } = useSwitchNetwork()
    // const { chain } = useNetwork()

    useEffect(() => {
        if (isConnected) {
            const commitmentJson = localStorage.getItem("zktree-vote-commitment")
            if (commitmentJson) {
                setCommitment(JSON.parse(commitmentJson))
                setRegistered(true)

                const voteOption = localStorage.getItem("zktree-vote-option")
                if (voteOption) {
                    setVoted(voteOption)
                }
            }
        }
    }, [isConnected])

    useEffect(() => {
        if (isConnected && voted) (async() => {
            const contract = getContract(await getSigner())
            const resultPromises = [1, 2, 3].map( async (option) => {
                return contract.getOptionCounter(option).then( (result: BigNumber) => result.toNumber())
            })
            setResults(await Promise.all(resultPromises))
        })()
    }, [isConnected, voted])

    async function getSigner() {
        return await getZeroDevSigner({
            projectId,
            owner: await getSocialWalletOwner(projectId, new SocialWallet())
        });
    }

    function getContract(signer: ZeroDevSigner) {
        return new Contract(contracts.zktreevote, contractABI, signer);
    }

    const register = async () => {
        setRegistrationInProcess(true)
        try {
            const signer = await getSigner()
            console.log("generateCommitment...")
            const commitment = await generateCommitment()
            if (!commitment) {
                alert("Commitment not generated")
                return
            }
            console.log(`Commitment generated: ${commitment.commitment}`)
            const contract = getContract(signer)
            const userIdentifier = ethers.utils.hashMessage(Math.random().toString()); console.log("Identifier: "+userIdentifier)
            // const userIdentifier = address
            console.log("Registering commitment...")
            const tx = await contract.registerCommitment(userIdentifier, commitment.commitment)
            console.log(`Transaction: ${tx.hash}`)
            const receipt = await tx.wait()
            console.log(`Receipt: ${JSON.stringify(receipt)}`)

            if (receipt.status == 1) {
                // successful
                localStorage.setItem(
                    "zktree-vote-commitment",
                    JSON.stringify(commitment)
                )
                setCommitment(commitment)
                setRegistered(true)
            } else {
                alert("Transaction error")
            }

        } catch (e: any) {
            if (e.error && e.error.reason == "execution reverted: The nullifier has been submitted") {
                alert("You already voted")
            } else if (e.error && e.error.reason) {
                console.error(e)
                alert(e.error.reason)
            } else {
                console.error(e)
                alert("Undefined Error. Check console for logs")
            }
        } finally {
            setRegistrationInProcess(false)
        }
    }

    const vote = async (voteOption: number) => {
        setVotingInProcess(true)
        try {
            const signer = await getZeroDevSigner({
                projectId,
                owner: await getSocialWalletOwner(projectId, new SocialWallet())
            })

            const contract = new Contract(contracts.zktreevote, contractABI, signer)

            const cd = await calculateMerkleRootAndZKProof(
                contracts.zktreevote,
                signer,
                TREE_LEVELS,
                commitment,
                "verifier.zkey"
            )
            // const voteOption = 1;
            const tx = await contract.vote(
                voteOption, // option
                cd.nullifierHash,
                cd.root,
                cd.proof_a,
                cd.proof_b,
                cd.proof_c
            )
            console.log(`Transaction: ${tx.hash}`)
            const receipt = await tx.wait()
            console.log(`Receipt: ${JSON.stringify(receipt)}`)

            if (receipt.status == 1) {
                // successful
                localStorage.setItem(
                    "zktree-vote-option",
                    voteOption.toString()
                )
                setVoted(voteOption.toString())
            } else {
                alert("Transaction error")
            }
        } catch (e: any) {
            if (e.error.reason == "execution reverted: The nullifier has been submitted") {
                alert("You are already voted")
            } else if (e.error.reason) {
                console.error(e)
                alert(e.error.reason)
            } else {
                console.error(e)
                alert("Undefined Error. Check console for logs")
            }
        } finally {
            setVotingInProcess(false)
        }
    }

    return (
        <>
            <h1>Trustless Voting</h1>

            <Connect/>

            {/*<div>
                Connected to {chain?.name ?? chain?.id}
                {chain?.unsupported && ' (unsupported)'}
            </div>*/}


            {isConnected && (
                <>
                    {/*<Account />*/}
                    { !registered && !registrationInProcess && <button onClick={register}>Register to voting</button> }
                    { registrationInProcess && <>Registering...</> }
                    { registered && !voted && !votingInProcess && <>
                        Vote for one the options:
                        <button onClick={() => vote(1)}>Option 1</button>
                        <button onClick={() => vote(2)}>Option 2</button>
                        <button onClick={() => vote(3)}>Option 3</button>
                    </>}
                    { votingInProcess && <>Voting...</> }
                    { voted && <>You voted for {voted} option</> }
                    { results && <>
                        <div>Results:</div>
                        <ul>
                        {results.map( (result, index) => <>
                            <li key={index}>Option {index + 1}: {result}</li>
                        </>)}
                        </ul>
                    </> }
                </>
            )}
        </>
    )
}

export default Page
