import React from 'react';
import passwordGenerator from "../assets/images/homework/01-password-generator-main.png";
import weatherDashboard from "../assets/images/homework/02-weather-dashboard-main.PNG";
import noteTaker from "../assets/images/homework/03-note-taker-application.PNG";
import workoutTracker from "../assets/images/homework/04-WorkoutTracker-Main.PNG";
import budgetTracker from "../assets/images/homework/05-app-main.PNG";
import portfolio2 from "../assets/images/homework/06-portfolio2.0-Main.PNG";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// FONT AWESOME IMPORTS
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
import 'react-popupbox/dist/react-popupbox.css';


const Portfolio = () => {
    //Password Generator
    const openPopupboxNetflix = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={passwordGenerator} alt="Netflix Clone Project..." />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic laudantium numquam pariatur dicta magni magnam, sit corrupti iste aliquam consectetur.</p>
                <b>GitHub:</b> <a href=""className="hyper-link" onClick={() => window.open("https://github.com/cperezba/Password-Generator")}>https://github.com/cperezba/Password-Generator</a>
            </>
        )
        PopupboxManager.open({ content })
    }

    const popupboxConfigNetflix = {
        titleBar: {
            enable: true,
            text: "Netflix Clone Project"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

     //Weather Dashboard
     const openPopupboxCityGuide = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={weatherDashboard} alt="City Guide App Project..." />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic laudantium numquam pariatur dicta magni magnam, sit corrupti iste aliquam consectetur.</p>
                <br/>
                {/* <b>Demo</b> <a className="hyper-link" onClick={() => window.open("https://github.com/8020Coding/netflix-project", "_blank")}>https://github.com/8020Coding/netflix-project</a> */}
                <b>GitHub:</b> <a href="" className="hyper-link" onClick={() => window.open("https://github.com/cperezba/Weather-Dashboard")}>https://github.com/cperezba/Weather-Dashboard</a>
            </>
        )
        PopupboxManager.open({ content })
    }

    const popupboxConfigCityGuide = {
        titleBar: {
            enable: true,
            text: "City Guide App Project"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

     //Note Taker
     const openPopupboxPortfolio = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={noteTaker} alt="Portfolio Project..." />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic laudantium numquam pariatur dicta magni magnam, sit corrupti iste aliquam consectetur.</p>
                <br/>
                {/* <b>Demo</b> <a className="hyper-link" onClick={() => window.open("https://github.com/8020Coding/netflix-project", "_blank")}>https://github.com/8020Coding/netflix-project</a> */}
                <b>GitHub:</b> <a href="" className="hyper-link" onClick={() => window.open("https://github.com/cperezba/Note-Taker")}>https://github.com/cperezba/Note-Taker</a>
            </>
        )
        PopupboxManager.open({ content })
    }

    const popupboxConfigPortfolio = {
        titleBar: {
            enable: true,
            text: "Portfolio Project"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }


     //Workout Tracker
     const openPopupboxTaskManager = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={workoutTracker} alt="Task Manager React and Redux Project. .." />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic laudantium numquam pariatur dicta magni magnam, sit corrupti iste aliquam consectetur.</p>
                <br/>
                {/* <b>Demo</b> <a className="hyper-link" onClick={() => window.open("https://github.com/8020Coding/netflix-project", "_blank")}>https://github.com/8020Coding/netflix-project</a> */}
                <b>GitHub:</b> <a href="" className="hyper-link" onClick={() => window.open("https://github.com/cperezba/Workout-Tracker")}>https://github.com/cperezba/Workout-Tracker</a>
            </>
        )
        PopupboxManager.open({ content })
    }

    const popupboxConfigTaskManager = {
        titleBar: {
            enable: true,
            text: "Task Manager React and Redux Project"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

     //Budget Tracker
     const openPopupboxBudgetTracker = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={budgetTracker} alt="Task Manager React and Redux Project. .." />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic laudantium numquam pariatur dicta magni magnam, sit corrupti iste aliquam consectetur.</p>
                <br/>
                {/* <b>Demo</b> <a className="hyper-link" onClick={() => window.open("https://github.com/8020Coding/netflix-project", "_blank")}>https://github.com/8020Coding/netflix-project</a> */}
                <b>GitHub:</b> <a href="" className="hyper-link" onClick={() => window.open("https://github.com/cperezba/Budget-Tracker-PWA")}>https://github.com/cperezba/Budget-Tracker-PWA</a>
            </>
        )
        PopupboxManager.open({ content })
    }

    const popupboxConfigBudgetTracker = {
        titleBar: {
            enable: true,
            text: "Task Manager React and Redux Project"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

     //Portfolio 2.0
     const openPopupboxPortfolio2 = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={portfolio2} alt="Task Manager React and Redux Project. .." />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic laudantium numquam pariatur dicta magni magnam, sit corrupti iste aliquam consectetur.</p>
                <br/>
                {/* <b>Demo</b> <a className="hyper-link" onClick={() => window.open("https://github.com/8020Coding/netflix-project", "_blank")}>https://github.com/8020Coding/netflix-project</a> */}
                <b>GitHub:</b> <a href="" className="hyper-link" onClick={() => window.open("https://github.com/cperezba/Portfolio-Prototype-2.0")}>https://github.com/cperezba/Portfolio-Prototype-2.0</a>
            </>
        )
        PopupboxManager.open({ content })
    }

    const popupboxConfigPortfolio2 = {
        titleBar: {
            enable: true,
            text: "Task Manager React and Redux Project"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }


    return (
        <div id="portfolio" className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">Portfolio</h1>
                <div className="image-box-wrapper row justify-content-center">
                    <div className="portfolio-image-box" onClick={openPopupboxNetflix}>
                        <img className="portfolio-image" src={passwordGenerator} alt="Netflix Clone Project..." />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                    {/* - */}
                    <div className="portfolio-image-box" onClick={openPopupboxCityGuide}>
                        <img className="portfolio-image" src={weatherDashboard} alt="City Guide Project..." />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                    {/* - */}
                    <div className="portfolio-image-box" onClick={openPopupboxPortfolio}>
                        <img className="portfolio-image" src={noteTaker} alt="Portfolio React and Material UIProject..." />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                    {/* - */}
                    <div className="portfolio-image-box" onClick={openPopupboxTaskManager}>
                        <img className="portfolio-image" src={workoutTracker} alt="Task Manager and Redux Project..." />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                    {/* - */}
                    <div className="portfolio-image-box" onClick={openPopupboxBudgetTracker}>
                        <img className="portfolio-image" src={budgetTracker} alt="Task Manager and Redux Project..." />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                    {/* - */}
                    <div className="portfolio-image-box" onClick={openPopupboxPortfolio2}>
                        <img className="portfolio-image" src={portfolio2} alt="Task Manager and Redux Project..." />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                </div>
            </div>
            <PopupboxContainer {...popupboxConfigNetflix}/>
            <PopupboxContainer {...popupboxConfigCityGuide}/>
            <PopupboxContainer {...popupboxConfigPortfolio}/>
            <PopupboxContainer {...popupboxConfigTaskManager}/>
            <PopupboxContainer {...popupboxConfigBudgetTracker}/>
            <PopupboxContainer {...popupboxConfigPortfolio2}/>
        </div>
    )
}

export default Portfolio