import css from "./Vote.module.scss"
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
import {useState} from "react";

const Vote = () => {
    const router = useRouter()
    const option = Number(router.query.option) || 1

    const vote = async () => {
        router.push({
            pathname: '/submittion',
            query: { option }
        }, '/submittion')
    }

    return <>
        <div className={css.ballot}>
            <div className={css.title}>
                Voting Ballot
            </div>
            <ul className={css.list}>
                { projects.map( p =>
                <li key={p.option}>
                    <label>
                        <input type="checkbox" checked={p.option == option}/> {p.title}
                    </label>
                </li> )}
            </ul>
        </div>

        <img src="img/vote.png"  className={css.img}/>
        <div className={css.description}>
            Your vote will be securely cast to Voting Box. No one can know your choice, after you send ballot to the Voting Box. It is anonymous. Please agree and continue to voting.
        </div>

        <button className={css.button} onClick={vote}>
            Agree and submit a vote
        </button>
    </>
}

export default Vote;