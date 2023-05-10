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
                        <a href="https://www.coralgables.com/department/office-city-clerk" class="Clerktext">
                            <label class="Clerktext"><span>Back To City Clerk Homepage</span></label></a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Banner;