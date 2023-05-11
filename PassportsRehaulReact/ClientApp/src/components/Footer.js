import React from 'react';
import "../styles/FooterStyle.css";
import cityLogo from '../assets/CG_Logo_white.png';
import droppin from '../assets/droppinWhite.png';
import teleIcon from '../assets/TelephoneIconWhite.png';
import faxIcon from '../assets/faxIcon.png';

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
            </div>
        </div>
    );
}

export default Footer;