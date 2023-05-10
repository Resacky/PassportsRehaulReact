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
    let [dateOfBirth, setDateOfBirth] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const [records, setRecords] = useState([]);
    const [selectedRecord, setSelectedRecord] = useState();

    const [passportRecords, setPassportRecords] = useState([]);
    const [selectedPassportRecords, setSelectedPassportRecords] = useState();
    let [passportPrice, setPassportPrice] = useState();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Name: ${firstName} ${middleName} ${lastName}\nDate of Birth: ${dateOfBirth}\nPhone Number: ${phoneNumber}\nLock Box selection: ${selectedRecord}\nType of Passport: ${selectedPassportRecords}\nPassport Price: ${passportPrice}`);

        setFirstName('');
        setMiddleName('');
        setLastName('');
        setDateOfBirth('');
        setPhoneNumber('');
        setPassportPrice(0);
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
                        dateOfBirth={dateOfBirth}
                        passportPrice={passportPrice} setPassportPrice={setPassportPrice}
                    />

                    <StateDepartment />

                    <button type="submit" className="submitButton">Submit</button>
                </form>
            </div>
        </>
    );
}

export default AddEntry;