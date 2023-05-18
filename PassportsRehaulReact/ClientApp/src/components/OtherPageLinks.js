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
                <li className={li}><a className={LinkStyle} href="http://sqlreports/Reports/Pages/Report.aspx?ItemPath=%2fCity+Clerk%27s+Office%2fPassport%2fv2+-+Passport+Application+Transmittal+(test+5-17-23)" target="_blank">Transmittal</a></li>
            </ul>
        </div>
    );
}

export default OtherPageLinks;