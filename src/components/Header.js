import React from 'react';
import Typed from 'react-typed';
import { Link } from 'react-scroll';

const Header = () => {
    return (
        <div id="home" className="header-wrapper">
            <div className="main-info">
                <canvas></canvas>
                <h1>Full-Stack Web Developer in Training</h1>
                <Typed
                    className="typed-text"
                    strings={["HTML, CSS, Javascript", "React", "Redux", "MERN"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <Link smooth={true} to="contact"  href="/#" className="btn-main-offer">Contact Me</Link>
            </div>
        </div>
    )
}

export default Header
