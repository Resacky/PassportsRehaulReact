import React from 'react';
import "../styles/Banner.css";
import CityLogo from "../assets/CityLogoHorizontalWhite.png";

function Banner() {

    return (
        <>
            <div class="header">
                <div class="headerContent">
                    <div>
                        <a href="https://www.coralgables.com">
                            <img src={CityLogo} alt="City Logo" class="cityLogo" />
                        </a>
                    </div>
                    <div>
                        <a href="https://www.coralgables.com/department/passport-acceptance-facility/passport-services" class="PassportText">
                            <label class="PassportText"><span>Back To Passport Services</span></label></a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Banner;