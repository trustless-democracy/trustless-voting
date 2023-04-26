import css from "./Submittion.module.scss"
import {useAccount} from "wagmi";
import {useRouter} from "next/router";
import {projects} from "@/config";
import {getSocialWalletOwner, getZeroDevSigner, ZeroDevSigner} from "@zerodevapp/sdk";
import {SocialWallet} from "@zerodevapp/social-wallet";
import { zeroDevProjectId} from "@/pages/_app";
import {Contract} from "ethers";
import address from '@/contract/address.mumbai.json'
import { abi } from '@/contract/TrustlessVoting.json'
import { TrustlessVoting } from '@/contract/TrustlessVoting'
import {useEffect, useState} from "react";

const Submittion = () => {
    const [loading, setLoading] = useState(true)
    const router = useRouter()
    const [error, setError] = useState(false)
    const option = Number(router.query.option) || 1

    useEffect(() => { vote().then() }, [])
    // useEffect(() => { getResults().then() }, [])

    async function getSigner() {
        return await getZeroDevSigner({
            projectId: zeroDevProjectId,
            owner: await getSocialWalletOwner(zeroDevProjectId, new SocialWallet())
        });
    }

    function getContract(signer: ZeroDevSigner) {
        return new Contract(address.TrustlessVoting, abi, signer) as TrustlessVoting
    }

    const vote = async () => {
        setLoading(true)
        try {
            const contract = await getContract(await getSigner())

            const tx = await contract.vote(option)
            console.log(`Transaction: ${tx.hash}`)
            const receipt = await tx.wait()
            console.log(`Receipt: ${JSON.stringify(receipt)}`)

            if (receipt.status == 1) {
                // save local var
                // router.push("/results")
                // await getResults()
            }
        } catch (e: any) {
            if (e.error && e.error.error && e.error.error.message == 'execution reverted: This address has already been voted') {
                alert("This address has already been voted. Vote update not supported in this version")
            } else if (e.error.reason) {
                console.error(e)
                alert(e.error.reason)
            } else {
                console.error(e)
                alert("Undefined Error. Check console for logs or try again")
            }
            setError(true)
        } finally {
            setLoading(false)
        }
    }

    const results = async () => {
        router.push('/results')
    }

    return <>
        <img className={css.img} src="img/basket.png"/>
        <div className="description">
            After submission no one can see your choice even you. Vote is anonymous.

            Vote is counted. We do not store link between you and the vote of yours.
        </div>

        { loading ? (<div className="loader" style={{ marginBottom: '100px'}}></div>) : !error ? <>
            <button className={css.button} onClick={results}>
                See results
            </button>

            {/*<div className={css.title}>Voting Results</div>
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
            </div>*/}
        </> : <div className="description">Error. Try again please</div>}
    </>
}

export default Submittion;