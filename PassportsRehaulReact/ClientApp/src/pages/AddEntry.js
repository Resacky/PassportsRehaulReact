import React, { useState } from 'react';
import { differenceInYears } from 'date-fns';
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

    const [records, setRecords] = useState([]);
    const [selectedRecord, setSelectedRecord] = useState(null);

    const [passportRecords, setPassportRecords] = useState([]);
    const [selectedPassportRecords, setSelectedPassportRecords] = useState(null);

    /* function for the logic of establishing how old the individual is relative to the 16 year old threshold */
    function isAdult(dateOfBirth) {
        const dob = new Date(dateOfBirth);
        const today = new Date();

        /* Calculate the difference between the current date and the date of birth using the date-fns library */
        const ageInYears = differenceInYears(today, dob);

        /* Check if the person is 16 years or older */
        return ageInYears >= 16;
    }

    const handleSubmit = (event) => {
        /* debugging purposes */
        event.preventDefault();
        console.log(`Name: ${firstName} ${middleName} ${lastName}\nDate of Birth: ${dateOfBirth}\nPhone Number: ${phoneNumber}\nLock Box selection: ${selectedRecord}`);
        /* this is the terinary expression for the determination if the user is an adult or not */
        const adultStatus = isAdult(dateOfBirth) ? 'Adult' : 'Not an adult';
        console.log(adultStatus);
    };

    return (
        <>
            <div className="mainContainer">
                <div className="OtherPageLinksContainer">
                    <OtherPageLinks />
                </div>
                <form onSubmit={handleSubmit} className="formContainer">

                    <ApplicantInformation
                        firstName={firstName} setFirstName={setFirstName}
                        middleName={middleName} setMiddleName={setMiddleName}
                        lastName={lastName} setLastName={setLastName}
                        dateOfBirth={dateOfBirth} setDateOfBirth={setDateOfBirth}
                        phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber}
                    />

                    <LockBoxDropdownMenu
                        records={records} setRecords={setRecords}
                        selectedRecord={selectedRecord} setSelectedRecord={setSelectedRecord}
                    />

                    <TypeOfPassportBox
                        passportRecords={passportRecords} setPassportRecords={setPassportRecords}
                        selectedPassportRecords={selectedPassportRecords} setSelectedPassportRecords={setSelectedPassportRecords}
                    />

                    <StateDepartment />

                    <button type="submit" className="submitButton">Submit</button>
                </form>
            </div>
        </>
    );
}

export default AddEntry;