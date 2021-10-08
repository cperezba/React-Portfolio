import React from 'react';
import author from '../assets/profile-pic.jpg';

const AboutMe = () => {
    return (
        <div id="about" className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                        <img className="profile-img" src={author} alt="Author" />
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1>About Me</h1>
                    <p>My name is Carlos and I am a 'Full-Stack Web Developer' in training! Bootcamp attendant at the University of Texas at Austin, currently working hard in becoming a fully fledged full-stack web developer</p>
                    <p>Enjoying every bit of my bootcamp journey, I am currently versed in everything from the trio-suite of HTML, CSS, and Javascript to databases, React, and MERN. Genuinely looking forward to mastering Redux and showcasing more projects in the future!</p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
