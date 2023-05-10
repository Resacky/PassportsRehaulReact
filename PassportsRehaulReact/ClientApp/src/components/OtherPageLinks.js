﻿import React, { useState } from 'react';
import { Link } from "react-router-dom";

import '../styles/OtherPageLinksStyle.css';

/* try to find a way to customize the react.js component to have different styles based on what page its used on */
function OtherPageLinks({ Links, ul, li, LinkStyle }) {

    return (
        <div className={Links}>
            <ul className={ul}>
                <li className={li}><Link to="/Home" className={LinkStyle}>Pass Port Home</Link></li>
                <li className={li}><Link to="/AddEntry" className={LinkStyle}>Add Entry</Link></li>
                <li className={li}><Link to="/SearchAndEditEntry" className={LinkStyle}>Search and Edit Entry</Link></li>
                <li className={li}><Link to="/SelectReporting" className={LinkStyle}>Select a Report</Link></li>
            </ul>
        </div>
    );
}

export default OtherPageLinks;