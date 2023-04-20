import "./ProjectsList.css"

function ProjectsList() {
    const projects = [1,2,3,4]
    return <>
        <div className="title">Voting on Participatory Budgeting in Helsinki</div>
        <div className="info">If you are 12 y.o. or older and you live in Helsinki for 2 years and more -
            you can participate in city life of your city by voting how to spend part of money from municipal budget. Vote for the project you want to see in your district.</div>
        <div className="projects-list">
            { projects.map( (project, index) => <div className="project-cart">
                {/*<div className="number">{index + 1}</div>*/}
                <div className="project-title">Shed for soccer</div>
                <div className="project-summary">Let's build a shed on the soccer field next to the Leinola school to make the field safer. 70,000 euros have been budgeted for the operation. Learn more...</div>
                <button>Vote</button>
            </div>) }
        </div>
    </>
}

export default ProjectsList