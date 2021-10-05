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
    const openPopupboxPasswordGenerator = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={passwordGenerator} alt="Portfolio Generator" />
                <p>My first project! A basic HTML, CSS, and Javascript powered password generator</p>
                <b>Deployed App: </b> <a href="https://cperezba.github.io/Password-Generator/" className="hyper-link" onClick={() => window.open("https://cperezba.github.io/Password-Generator/", "_blank")}>https://cperezba.github.io/Password-Generator/</a>
                <b>GitHub:</b> <a href="https://github.com/cperezba/Password-Generator" className="hyper-link" onClick={() => window.open("https://github.com/cperezba/Password-Generator")}>https://github.com/cperezba/Password-Generator</a>
            </>
        )
        PopupboxManager.open({ content })
    }

    const popupboxConfigPasswordGenerator = {
        titleBar: {
            enable: true,
            text: "Password Generator Project"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

     //Weather Dashboard
     const openPopupboxDashboard = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={weatherDashboard} alt="Weather Dashboard..." />
                <p>API powered dashboard providing an up to five-day weather forecast!</p>
                <br/>
                <b>Deployed App</b> <a href="https://cperezba.github.io/Weather-Dashboard/" className="hyper-link" onClick={() => window.open("https://cperezba.github.io/Weather-Dashboard/", "_blank")}>https://cperezba.github.io/Weather-Dashboard/</a>
                <b>GitHub:</b> <a href="https://github.com/cperezba/Weather-Dashboard" className="hyper-link" onClick={() => window.open("https://github.com/cperezba/Weather-Dashboard")}>https://github.com/cperezba/Weather-Dashboard</a>
            </>
        )
        PopupboxManager.open({ content })
    }

    const popupboxConfigWeatherDashboard = {
        titleBar: {
            enable: true,
            text: "Weather Dashboard App Project"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

     //Note Taker
     const openPopupboxNoteTaker = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={noteTaker} alt="Note Taker Project..." />
                <p>Node.js and Sequelize powered web application for taking daily notes!</p>
                <br/>
                <b>Deployed App</b> <a href="https://note-taker-dev.herokuapp.com/" className="hyper-link" onClick={() => window.open("https://note-taker-dev.herokuapp.com/", "_blank")}>https://note-taker-dev.herokuapp.com/</a>
                <b>GitHub:</b> <a href="https://github.com/cperezba/Weather-Dashboard" className="hyper-link" onClick={() => window.open("https://github.com/cperezba/Weather-Dashboard")}>https://github.com/cperezba/Note-Taker</a>
            </>
        )
        PopupboxManager.open({ content })
    }

    const popupboxConfigNoteTaker = {
        titleBar: {
            enable: true,
            text: "Note Taker Project"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }


     //Workout Tracker
     const openPopupboxWorkoutTracker = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={workoutTracker} alt="Workout Tracker Project. .." />
                <p>Node.js and MongoDB powered application for tracking personal workouts!</p>
                <br/>
                <b>Deployed App</b> <a href="https://workout-tracker-app-uta.herokuapp.com/?id=6131695ca2e43a001688cbbc" className="hyper-link" onClick={() => window.open("https://workout-tracker-app-uta.herokuapp.com/?id=6131695ca2e43a001688cbbc", "_blank")}>https://workout-tracker-app-uta.herokuapp.com/?id=6131695ca2e43a001688cbbc</a>
                <b>GitHub:</b> <a href="https://github.com/cperezba/Workout-Tracker" className="hyper-link" onClick={() => window.open("https://github.com/cperezba/Workout-Tracker")}>https://github.com/cperezba/Workout-Tracker</a>
            </>
        )
        PopupboxManager.open({ content })
    }

    const popupboxConfigWorkoutTracker = {
        titleBar: {
            enable: true,
            text: "Workout Tracker Project"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

     //Budget Tracker
     const openPopupboxBudgetTracker = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={budgetTracker} alt="Budget Tracker Project. .." />
                <p>'Proggressive Web Application' (PWA) for budget tracking in low connectivity areas!</p>
                <br/>
                <b>Deployed App</b> <a href="https://budget-tracker-app-uta.herokuapp.com/" className="hyper-link" onClick={() => window.open("https://budget-tracker-app-uta.herokuapp.com/", "_blank")}>https://budget-tracker-app-uta.herokuapp.com/</a>
                <b>GitHub:</b> <a href="https://github.com/cperezba/Budget-Tracker-PWA" className="hyper-link" onClick={() => window.open("https://github.com/cperezba/Budget-Tracker-PWA")}>https://github.com/cperezba/Budget-Tracker-PWA</a>
            </>
        )
        PopupboxManager.open({ content })
    }

    const popupboxConfigBudgetTracker = {
        titleBar: {
            enable: true,
            text: "Budget Tracker Project"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

     //Portfolio 2.0
     const openPopupboxPortfolio = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={portfolio2} alt="Portfolio Project. .." />
                <p>My original portfolio, exclusively using HTML, CSS, and Javascript!</p>
                <br/>
                <b>Deployed App</b> <a href="https://cperezba.github.io/Portfolio-Prototype-2.0/" className="hyper-link" onClick={() => window.open("https://cperezba.github.io/Portfolio-Prototype-2.0/", "_blank")}>https://cperezba.github.io/Portfolio-Prototype-2.0/</a>
                <b>GitHub:</b> <a href="https://github.com/cperezba/Portfolio-Prototype-2.0" className="hyper-link" onClick={() => window.open("https://github.com/cperezba/Portfolio-Prototype-2.0")}>https://github.com/cperezba/Portfolio-Prototype-2.0</a>
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


    return (
        <div id="portfolio" className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">Portfolio</h1>
                <div className="image-box-wrapper row justify-content-center">
                    <div className="portfolio-image-box" onClick={openPopupboxPasswordGenerator}>
                        <img className="portfolio-image" src={passwordGenerator} alt="Password Generator Project..." />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                    {/* - */}
                    <div className="portfolio-image-box" onClick={openPopupboxDashboard}>
                        <img className="portfolio-image" src={weatherDashboard} alt="Weather Dashboard Project..." />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                    {/* - */}
                    <div className="portfolio-image-box" onClick={openPopupboxNoteTaker}>
                        <img className="portfolio-image" src={noteTaker} alt="Note Taker Project..." />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                    {/* - */}
                    <div className="portfolio-image-box" onClick={openPopupboxWorkoutTracker}>
                        <img className="portfolio-image" src={workoutTracker} alt="Workout Tracker Project..." />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                    {/* - */}
                    <div className="portfolio-image-box" onClick={openPopupboxBudgetTracker}>
                        <img className="portfolio-image" src={budgetTracker} alt="Budget Tracker Project..." />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                    {/* - */}
                    <div className="portfolio-image-box" onClick={openPopupboxPortfolio}>
                        <img className="portfolio-image" src={portfolio2} alt="Portfolio Project..." />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                </div>
            </div>
            <PopupboxContainer {...popupboxConfigPasswordGenerator}/>
            <PopupboxContainer {...popupboxConfigWeatherDashboard}/>
            <PopupboxContainer {...popupboxConfigNoteTaker}/>
            <PopupboxContainer {...popupboxConfigWorkoutTracker}/>
            <PopupboxContainer {...popupboxConfigBudgetTracker}/>
            <PopupboxContainer {...popupboxConfigPortfolio}/>
        </div>
    )
}

export default Portfolio