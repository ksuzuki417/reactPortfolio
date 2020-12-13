import React from "react";
import "../style.css";

function Projects() {
    return (
        <div>
            <h1>Projects Page</h1>
            <div className="card" style={{width: "18rem;"}}>
                <div className="card-body">
                <img className="card-img-top" src="./images/WeldingWorklist.gif" alt="Welders Organizer" style={{width: "30%"}}></img>
                    <h5 className="card-title">Welder's Organizer</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Group Project</h6>
                    <p className="card-text">Technologies Used</p>
                    <a href="https://ksuzuki417.github.io/project1/" className="card-link">App Link</a>
                    <a href="https://github.com/ksuzuki417/project1" className="card-link">Repository</a>
                </div>
                <div className="card">
                    <div className="card-body">
                    <img className="card-img-top" src="./images/project2.gif" alt="Who Dis?" style={{width: "30%"}}></img>
                        <h5 className="card-title">Who Dis?</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Group Project</h6>
                        <p className="card-text">Technologies Used</p>
                        <a href="https://peaceful-citadel-50333.herokuapp.com/" className="card-link">App Link</a>
                        <a href="https://github.com/ksuzuki417/project2-whoDis" className="card-link">Repository</a>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                    <img className="card-img-top" src="./images/ems.gif" alt="EMS" style={{width: "30%"}}></img>
                        <h5 className="card-title">Employee Management System</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Self Project</h6>
                        <p className="card-text">Command Line Application</p>
                        <a href="https://github.com/ksuzuki417/employeeManagementSystem" className="card-link">Repository</a>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                    <img className="card-img-top" src="./images/noteTakerDemo.gif" alt="Note Taker" style={{width: "30%"}}></img>
                        <h5 className="card-title">Note Taker</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Self Project</h6>
                        <p className="card-text">Technologies Used</p>
                        <a href="https://mysterious-springs-18473.herokuapp.com/notes" className="card-link">App Link</a>
                        <a href="https://github.com/ksuzuki417/noteTaker" className="card-link">Repository</a>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                    <img className="card-img-top" src="./images/workDayScheduler.png" alt="Work Day Scheduler" style={{width: "30%"}}></img>
                        <h5 className="card-title">Work Day Scheduler</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Self Project</h6>
                        <p className="card-text">Technologies Used</p>
                        <a href="https://ksuzuki417.github.io/hw5-thirdParty-APIs-scheduler/" className="card-link">App Link</a>
                        <a href="https://github.com/ksuzuki417/hw5-thirdParty-APIs-scheduler" className="card-link">Repository</a>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                    <img className="card-img-top" src="./images/templateEngineDemo.gif" alt="Employee Summary" style={{width: "30%"}}></img>
                        <h5 className="card-title">Employee Summary</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Self Project</h6>
                        <p className="card-text">Technologies Used</p>
                        <a href="https://ksuzuki417.github.io/templateEngine/" className="card-link">App Link</a>
                        <a href="https://github.com/ksuzuki417/templateEngine" className="card-link">Repository</a>
                    </div>
                </div>
            </div>

        </div>
    )

}

export default Projects;