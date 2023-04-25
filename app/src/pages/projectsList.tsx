import css from "./ProjectsList.module.scss"
import {projects} from "@/config";
import {useAccount, useConnect} from "wagmi";
import {useRouter} from "next/router";
import {router} from "next/client";
import {useState} from "react";

function ProjectsList() {
    const [selectedOption, setSelectedOption] = useState<number>()
    const router = useRouter()
    const { isConnected, address } = useAccount()
    const { connect, connectors, isLoading, pendingConnector } = useConnect({
        onError: (error: any) => {
            console.error(error)
            alert("Please connect again after page reloaded")
            location.reload()
        },
        onSuccess: data => {
            navigateToVotePage(selectedOption!!)
        }
    })

    const navigateToVotePage = (option: number) => {
        router.push({
            pathname: '/vote',
            query: { option }
        }, '/vote')
    }

    const onVoteClicked = async (option: number) => {
        navigateToVotePage(option)

        /*setSelectedOption(option)

        if (isConnected) {
            navigateToVotePage(option)
        } else {
            await connect({ connector: connectors[0] })
        }*/
    }

    return <>
        <div className={css.title}>Voting on Participatory Budgeting in Helsinki</div>
        <div className={css.info}>If you are 12 y.o. or older and you live in Helsinki for 2 years and more -
            you can participate in city life of your city by voting how to spend part of money from municipal budget. Vote for the project you want to see in your district.</div>
        <div className={css.projectsList}>
            { projects.map( (project) => <div key={project.option} className={css.projectCart}>
                {/*<div className="number">{index + 1}</div>*/}
                <div className={css.projectTitle}>{project.title}</div>
                <div className={css.projectSummary}>
                    {project.description}
                    <a href={project.link}>Learn more...</a>
                </div>
                <button className={css.button} onClick={() => onVoteClicked(project.option)}>Vote</button>
            </div>) }
        </div>
    </>
}

export default ProjectsList