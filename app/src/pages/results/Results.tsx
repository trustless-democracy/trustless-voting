import css from "./Results.module.scss"
import {useAccount} from "wagmi";
import {useRouter} from "next/router";
import {projects} from "@/config";
import {
    getSocialWalletOwner,
    getZeroDevSigner,
    ZeroDevSigner
} from "@zerodevapp/sdk";
import {SocialWallet} from "@zerodevapp/social-wallet";
import { zeroDevProjectId} from "@/pages/_app";
import {Contract} from "ethers";
import address from '@/contract/address.mumbai.json'
import { abi } from '@/contract/TrustlessVoting.json'
import { TrustlessVoting } from '@/contract/TrustlessVoting'
import {useEffect, useState} from "react";

const Results = () => {
    // const { isConnected, address } = useAccount()
    const [rawResults, setRawResults] = useState<number[]>([])
    const [loading, setLoading] = useState(true)
    const [totalVoted, setTotalVoted] = useState<number>()
    const router = useRouter()

    useEffect(() => { getResults().then() }, [])

    async function getSigner() {
        return await getZeroDevSigner({
            projectId: zeroDevProjectId,
            owner: await getSocialWalletOwner(zeroDevProjectId, new SocialWallet())
        });
    }

    function getContract(signer: ZeroDevSigner) {
        return new Contract(address.TrustlessVoting, abi, signer) as TrustlessVoting
    }

    const getResults = async () => {
        setLoading(true)
        try {
            const contract = await getContract(await getSigner())

            const maxOption = Math.max(...projects.map(p => p.option))
            const resultsBn = await contract.results(maxOption)
            const results = resultsBn.map(bn => bn.toNumber())
            console.log(JSON.stringify(results))
            setRawResults(results)
            setTotalVoted(results.reduce((sum, current) => sum + current, 0))
        } catch (e: any) {
            console.error(e)
            alert("Undefined Error. Check console for logs or try again")
        } finally {
            setLoading(false)
        }
    }

    return <>
        { loading ? (<div className="loader" style={{ marginBottom: '100px'}}></div>) : <>
            <div className={css.title}>Voting Results</div>
            <div className={css.resultsList}>
                { projects.map( p =>
                <div key={p.option} className={css.resultRow}>
                    <div className={css.number}>{rawResults[p.option - 1]}</div>
                    <div className={css.projectName}>{p.title}</div>
                </div> )}
            </div>

            <div className={css.description}>
                {totalVoted} people voted<br/>
                Voting will end in 10 days
            </div>
        </>}
    </>
}

export default Results;