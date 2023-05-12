import React from 'react';
import "../styles/FooterStyle.css";
import cityLogo from '../assets/CG_Logo_white.png';
import droppin from '../assets/droppinWhite.png';
import teleIcon from '../assets/TelephoneIconWhite.png';
import faxIcon from '../assets/faxIcon.png';

import linkedInIcon from '../assets/LinkedInIconWhite.png';
import instagramIcon from '../assets/InstagramIconWhite.png';
import twitterIcon from '../assets/TwitterIconWhite.png';
import facebookIcon from '../assets/FacebookIconWhite.png';
import youtubeIcon from '../assets/YoutubeIconWhite.png';
import nextdoorIcon from '../assets/NextdoorIconWhite.png';

function Footer() {

    return (
        <div className="footerContainer">
            <div className="rowContainer">
                <img src={cityLogo} className="footerLogo"></img>
                <div className="contactUs">
                    <h3 className="contactUsHeader">
                        Contact us
                    </h3>
                    <div className="locationDiv">
                        <img src={droppin} className="droppin"></img>
                        <label className="location">
                            Coral Gables City Hall
                            405 Biltmore Way
                            Coral Gables, FL 33134
                        </label>
                    </div>
                    <div className="telephoneDiv">
                        <img src={teleIcon} className="teleIcon"></img>
                        <label className="telephone">
                            Tel: 305-446-6800
                        </label>
                    </div>
                    <div className="faxDiv">
                        <img src={faxIcon} className="faxIcon"></img>
                        <label className="fax">
                            Fax: 305-460-5371
                        </label>
                    </div>
                    <div className="impairmentDiv">
                        <label className="impairmentInfo">
                            Hearing or Speech Impaired Telecommunication:
                            TTY/TDD: 305-442-1600
                        </label>
                    </div>
                </div>
                <div className="connectWithUs">
                    <h3 className="connectWithUsHeader">Connect with us</h3>
                    <ul className="connectWithUsMenu">
                        <li className="menuItem"><a href="https://www.linkedin.com/company/cityofcoralgables"><img src={linkedInIcon} className="LinkedInIcon"></img></a></li>
                        <li className="menuItem"><a href="https://www.instagram.com/cityofcoralgables/?hl=en"><img src={instagramIcon} className="instagramIcon"></img></a></li>
                        <li className="menuItem"><a href="https://twitter.com/CityCoralGables"><img src={twitterIcon} className="twitterIcon"></img></a></li>
                        <li className="menuItem"><a href="https://www.facebook.com/cityofcoralgables"><img src={facebookIcon} className="facebookIcon"></img></a></li>
                        <li className="menuItem"><a href="https://www.youtube.com/coralgablestv"><img src={youtubeIcon} className="youtubeIcon"></img></a></li>
                        <li className="menuItem"><a href="https://nextdoor.com/city/coral-gables--fl/"><img src={nextdoorIcon} className="nextdoorIcon"></img></a></li>
                        <li className="menuItem"><a href="https://www.coralgables.com/department/communications-and-public-affairs/services/coral-gables-television" className="coralgablesTV">Coral Gables TV</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;