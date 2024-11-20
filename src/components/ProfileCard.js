import React from "react";
import './ProfileCard.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faUserPlus, faBan, faBars, faCopyright } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const ProfileCard = () => {
    return (
        <div className="card-container">
            <div className="card">
                <div className="card-content">
                    <div className="row">
                        <div className="col-6">
                            <img src="Murali.jpg" className="img" alt="Profile" />
                            <p className="card-title">Rajesh Kumar Str </p>
                            <p className="city">Sattur</p>
                            <p className="card-description">Web Developer</p>
                        </div>
                        <div className="col-6">
                            <button className="btn btn-outline-primary bars"><FontAwesomeIcon icon={faBars} size="1x" /></button>
                        </div>
                    </div>
                    <div className="buttons">
                        <button className="btn btn-outline-primary"><FontAwesomeIcon icon={faUserPlus} size="1x" /></button>
                        <button className="btn btn-outline-primary"><FontAwesomeIcon icon={faComments} size="1x" /></button>
                        <button className="btn btn-outline-primary"><FontAwesomeIcon icon={faBan} size="1x" /></button>
                    </div>
                    <hr></hr>
                    <div className="skills">
                        <p>Skills</p>
                        <ul>
                            <li>Java Developer</li>
                            <li>MEAN Stack</li>
                            <li>MERN Stack</li>
                            <li>IoT</li>
                        </ul>
                    </div>
                </div>
                {/* Footer */}
                <footer class="footer">
                    <p><FontAwesomeIcon icon={faCopyright} size="1x" /> 2024 Profile Card. All rights reserved.</p>
                    <div>
                        <a href="https://www.facebook.com">
                            <FontAwesomeIcon icon={faFacebook} size="2x" />
                        </a>
                        <a href="https://www.instagram.com">
                            <FontAwesomeIcon icon={faInstagram} size="2x" />
                        </a>
                        <a href="https://www.linkedin.com">
                            <FontAwesomeIcon icon={faLinkedin} size="2x" />
                        </a>
                        <a href="https://www.twitter.com">
                            <FontAwesomeIcon icon={faTwitter} size="2x" />
                        </a>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default ProfileCard;