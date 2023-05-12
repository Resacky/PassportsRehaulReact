import React, { useState } from 'react';
import OtherPageLinks from "../components/OtherPageLinks";
import ApplicantInformation from "../components/ApplicantInformation";
import LockBoxDropdownMenu from "../components/LockBox";
import TypeOfPassportBox from "../components/TypeOfPassportBox";
import StateDepartment from "../components/StateDepartment";
import Banner from '../components/Banner';
import Footer from '../components/Footer';

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

    const [passportARSSD, setPassportARSSD] = useState([]);
    const [selectedPassportARSSD, setSelectedPassportARSSD] = useState();
    const [totalPrice, setTotalPrice] = useState();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Name: ${firstName} ${middleName} ${lastName}\nDate of Birth: ${dateOfBirth}\nPhone Number: ${phoneNumber}\nLock Box selection: ${selectedRecord}\nType of Passport: ${selectedPassportRecords}\nPassport Price: ${passportPrice}\nAdded Return Services Price: ${selectedPassportARSSD}\nTotal: ${totalPrice}`);

        setFirstName('');
        setMiddleName('');
        setLastName('');
        setDateOfBirth('');
        setPhoneNumber('');
        /* find a way to clear the dropboxes to the defaults after clicking submit */
    };

    return (
        <>
            <div className="mainContainer">
                <Banner
                    header="whiteHeader" headerContent="whiteHeaderContent"
                    cityLogo="whiteCityLogo" PassportText="whitePassportText"
                />
                <div class="subHeader">
                    <label class="subHeaderText">Passport Add Entry</label>
                </div>
                <div className="OtherPageLinksContainer">
                    <OtherPageLinks />
                </div>
                <div className="overall">
                    <div className="centering">
                        <div className="structure">
                            <form onSubmit={handleSubmit} className="formContainer">

                                <ApplicantInformation
                                    firstName={firstName} setFirstName={setFirstName}
                                    middleName={middleName} setMiddleName={setMiddleName}
                                    lastName={lastName} setLastName={setLastName}
                                    dateOfBirth={dateOfBirth} setDateOfBirth={setDateOfBirth}
                                    phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber}
                                />

                                <div className="secondColumn">
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

                                    <StateDepartment
                                        passportARSSD={passportARSSD} setPassportARSSD={setPassportARSSD}
                                        selectedPassportARSSD={selectedPassportARSSD} setSelectedPassportARSSD={setSelectedPassportARSSD}
                                        passportPrice={passportPrice}
                                        totalPrice={totalPrice} setTotalPrice={setTotalPrice}
                                    />
                                </div>
                            </form>
                            <div className="submitButtonDiv">
                                <button type="submit" className="submitButton">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddEntry;