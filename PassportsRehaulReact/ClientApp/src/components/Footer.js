import React from 'react';
import "../styles/FooterStyle.css";
import cityLogo from '../assets/CG_Logo_white.png'

function Footer() {

    return (
        <div className="footerContainer">
            <div className="rowContainer">
                <div className="row">
                    <img src={cityLogo} className="footerLogo">
                    </img>
                    <div className="ContactUs">
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;