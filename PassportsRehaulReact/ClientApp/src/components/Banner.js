import React from 'react';

import OtherPageLinks from './OtherPageLinks';

import '../styles/OtherPageLinksStyle.css';
import "../styles/Banner.css";
import CityLogoWhite from "../assets/CityLogoHorizontalWhite.png";
import CityLogoOrange from "../assets/CityLogoOrange.png";

function Banner({ header, headerContent, cityLogo, PassportText }) {

    return (
        <>
            <div class={header} >
                <div class={headerContent}>
                    <div>
                        <a href="https://www.coralgables.com">
                            <img src={cityLogo == 'homeCityLogo' ? CityLogoWhite : CityLogoOrange} alt="City Logo" class={cityLogo} />
                        </a>
                    </div>
                    <div className="bannerLinks">
                        <OtherPageLinks Links="HomeLinks" ul="HomeUl" li="HomeLi" LinkStyle="primary" />
                    </div>
                    <div>
                        <a href="https://www.coralgables.com/department/passport-acceptance-facility/passport-services" class={PassportText} >
                            <label class={PassportText}><span>Back To Passport Services</span></label></a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Banner;