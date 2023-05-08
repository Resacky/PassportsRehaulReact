import React, { useState } from 'react';
import OtherPageLinks from "../components/OtherPageLinks";
import ApplicantInformation from "../components/ApplicantInformation";
import LockBoxDropdownMenu from "../components/LockBox";
import TypeOfPassportBox from "../components/TypeOfPassportBox";
import StateDepartment from "../components/StateDepartment";

import "../styles/AddEntryStyles/AddEntryStyle.css";

function AddEntry() {

    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Name: ${firstName} ${middleName} ${lastName}\nDate of Birth: ${dateOfBirth}\nPhone Number: ${phoneNumber}`);
    };

    return (
        <>
            <div className="mainContainer">
                <div className="OtherPageLinksContainer">
                    <OtherPageLinks />
                </div>
                <form onSubmit={handleSubmit}>

                    <ApplicantInformation
                        firstName={firstName} setFirstName={setFirstName}
                        middleName={middleName} setMiddleName={setMiddleName}
                        lastName={lastName} setLastName={setLastName}
                        dateOfBirth={dateOfBirth} setDateOfBirth={setDateOfBirth}
                        phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber}
                    />

                    <LockBoxDropdownMenu />
                    <TypeOfPassportBox />
                    <StateDepartment />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    );
}

export default AddEntry;