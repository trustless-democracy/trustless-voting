import css from "./Results.module.scss"
import {useAccount, useProvider} from "wagmi";
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
import {publicProvider} from "wagmi/dist/providers/public";

const Results = () => {
    const provider = useProvider()
    const [rawResults, setRawResults] = useState<number[]>([])
    const [loading, setLoading] = useState(true)
    const [totalVoted, setTotalVoted] = useState<number>()
    const router = useRouter()

    useEffect(() => { getResults().then() }, [])

    function getContract() {
        return new Contract(address.TrustlessVoting, abi, provider) as TrustlessVoting
    }

    const getResults = async () => {
        setLoading(true)
        try {
            const contract = await getContract()

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
        { loading ? (<div className="loader" style={{ marginTop: '100px'}}></div>) : <>
            <div className={css.title}>Voting Results</div>
            <div className={css.resultsList}>
                { projects.map( p =>
                <div key={p.option} className={css.resultRow}>
                    <div className={css.number}>{rawResults[p.option - 1]}</div>
                    <div className={css.projectName}>{p.title}</div>
                </div> )}
            </div>

            <div className="description">
                {totalVoted} people voted<br/>
                Voting will end in 10 days
            </div>
        </>}
    </>
}

export default Results;