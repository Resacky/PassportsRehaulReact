import React, { useState } from 'react';
import ApplicantInformation from "../components/ApplicantInformation";
import LockBoxDropdownMenu from "../components/LockBox";
import TypeOfPassportBox from "../components/TypeOfPassportBox";
import StateDepartment from "../components/StateDepartment";
import Banner from '../components/Banner';

import "../styles/AddEntryStyles/AddEntryStyle.css";

function AddEntry() {

    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    let [dateOfBirth, setDateOfBirth] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const [lockBoxRecords, setLockBoxRecords] = useState([]);
    const [selectedLockBoxRecords, setSelectedLockBoxRecords] = useState();

    const [passportRecords, setPassportRecords] = useState([]);
    const [selectedPassportRecords, setSelectedPassportRecords] = useState();
    let [passportPrice, setPassportPrice] = useState();

    const [passportARSSD, setPassportARSSD] = useState([]);
    const [selectedPassportARSSD, setSelectedPassportARSSD] = useState();
    const [totalPrice, setTotalPrice] = useState();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Name: ${firstName} ${middleName} ${lastName}\nDate of Birth: ${dateOfBirth}\nPhone Number: ${phoneNumber}\nLock Box selection: ${selectedLockBoxRecords}\nType of Passport: ${selectedPassportRecords}\nPassport Price: ${passportPrice}\nAdded Return Services Price: ${selectedPassportARSSD}\nTotal: ${totalPrice}`);

        /* this is necessary clean up the data a little bit to have the SQL database recogize the formatting of the JSON to pass it into the POST request */
        /* data clean up of DOB */
        let formatedDOB = null;
        try {
            let DOBDate = new Date(dateOfBirth);
            formatedDOB = DOBDate.toISOString();
            formatedDOB = formatedDOB.split('.')[0];
        } catch (e) {
            console.error('There was an error within the data clean up of the date of birth', e);
        }
        /* data clean up of phone number */
        let cleanedPhoneNumber = null;
        try {
            cleanedPhoneNumber = phoneNumber.replace(/[-() ]/g, "");
        } catch (e) {
            console.error('There was an error within the data clean up of the date of birth', e);
        }
        /* data clean up of the date creation */
        let formattedDateCreated = null;
        try {
            let dateCreated = new Date();
            formattedDateCreated = dateCreated.toISOString();
            formattedDateCreated = formattedDateCreated.split('.')[0];
        } catch (e) {
            console.error('There was an error within the data clean up of the date creation timestamp', e);
        }
        /* this is to create the JSON model to then pass it onto the POST request */
        const model = {
            'appFirst': firstName,
            'appMiddle': middleName,
            'appLast': lastName,
            'dob': formatedDOB,
            'zipCode': null,
            'phone': cleanedPhoneNumber,
            'regularPass': true,
            'noFeePass': null,
            'amendedPass': null,
            'lBoxDescription': selectedLockBoxRecords,
            'arssd': selectedPassportARSSD,
            'passPortFee': 0,
            'arscg': null,
            'photosFee': null,
            'checkSD': totalPrice,
            'departure': null,
            'created': formattedDateCreated,
            'createdBy': null,
            'cash': null,
            'total': totalPrice,
            'regular': null,
            'nofee': null,
            'amended': null,
        };
        /* debugging */
        let parsedJSON = JSON.stringify(model);
        //console.log(parsedJSON);
        /* the actual POST request and parsing through all the JSON */
        fetch('https://localhost:7243/api/entrybackup2', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: parsedJSON
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error('Error:', error));

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
                <div className="overall">
                    <div className="centering">
                        <form onSubmit={handleSubmit} className="formContainer">
                            <div className="structure">
                                <ApplicantInformation
                                    firstName={firstName} setFirstName={setFirstName}
                                    middleName={middleName} setMiddleName={setMiddleName}
                                    lastName={lastName} setLastName={setLastName}
                                    dateOfBirth={dateOfBirth} setDateOfBirth={setDateOfBirth}
                                    phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber}
                                />
                                <div className="secondColumn">
                                    <LockBoxDropdownMenu
                                        records={lockBoxRecords} setRecords={setLockBoxRecords}
                                        selectedRecord={selectedLockBoxRecords} setSelectedRecord={setSelectedLockBoxRecords}
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
                            </div>
                            <div className="submitButtonDiv">
                                <button type="submit" className="submitButton">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddEntry;