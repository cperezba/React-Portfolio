import React from 'react';
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    RedditShareButton,
    RedditIcon,
    LinkedinShareButton,
    LinkedinIcon,
} from 'react-share';
import resume from '../assets/documents/mainResume-carlosAPerez.pdf';

const Footer = () => {
    return (
        <div id="resume" className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex">
                            <p>4405 S Shary Rd. Mission Texas 78572</p>
                        </div>
                        <div className="d-flex">
                            <a href="tel: 763-438-4014">(763) 438-4014</a>
                        </div>
                        <div className="d-flex">
                            <p>ca.perez.barr.dev@gmail.com</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row">
                            <div className="col">
                                <a className="footer-nav">Home</a>
                                <br />
                                <a className="footer-nav">Portfolio</a>
                                <br />
                                <a className="footer-nav">Connect</a>
                            </div>
                            <div className="col">
                                <a className="footer-nav">About Me</a>
                                <br />
                                <a className="footer-nav">Contact</a>
                                <br />
                                <a href={resume} download="mainResume-carlosAPerez" className="footer-nav">Resume</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                        <div className="d-flex justify-content-center">
                            <FacebookShareButton
                                url={"https://www.youtube.com/8020coding"}
                                quote={"FullStack Developer"}
                                hastag="#javascript"
                            >
                                <FacebookIcon className="mx-3" size={36} />
                            </FacebookShareButton>
                            <TwitterShareButton
                                url={"https://www.youtube.com/8020coding"}
                                quote={"FullStack Developer"}
                                hastag="#javascript"
                            >
                                <TwitterIcon className="mx-3" size={36} />
                            </TwitterShareButton>
                            <RedditShareButton
                                url={"https://www.youtube.com/8020coding"}
                                quote={"FullStack Developer"}
                                hastag="#javascript"
                            >
                                <RedditIcon className="mx-3" size={36} />
                            </RedditShareButton>
                            <LinkedinShareButton
                                url={"https://www.youtube.com/8020coding"}
                                quote={"FullStack Developer"}
                                hastag="#javascript"
                            >
                                <LinkedinIcon className="mx-3" size={36} />
                            </LinkedinShareButton>
                            
                        </div>
                        <p className="pt-3 text-center">
                           
                        </p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Footer
