import React, { useState } from 'react';
import { Link } from "react-router-dom";

import '../styles/OtherPageLinksStyle.css';

/* try to find a way to customize the react.js component to have different styles based on what page its used on */
function OtherPageLinks({ Links, ul, li, LinkStyle }) {

    return (
        <div className={Links}>
            <ul className={ul}>
                <li className={li}><Link to="/AddEntry" className={LinkStyle}>Add Entry</Link></li>
                <li className={li}><Link to="/SearchAndEditEntry" className={LinkStyle}>Search and Edit Entries</Link></li>
                <li className={li}><Link to="/SelectReporting" className={LinkStyle}>Reporting</Link></li>
            </ul>
        </div>
    );
}

export default OtherPageLinks;