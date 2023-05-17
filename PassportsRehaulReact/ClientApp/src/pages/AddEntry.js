import React, { useState } from 'react';
import ApplicantInformation from "../components/ApplicantInformation";
import LockBoxDropdownMenu from "../components/LockBox";
import TypeOfPassportBox from "../components/TypeOfPassportBox";
import StateDepartment from "../components/StateDepartment";
import Banner from '../components/Banner';
import ErrorHandlingBox from '../components/ErrorHandlingBox';

import "../styles/AddEntryStyles/AddEntryStyle.css";

function AddEntry() {

    /* variables for the form */
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

    const [totalValidation, setTotalValidation] = useState('');

    const [errorHandling, setErrorHandling] = useState(false);
    const [errorHandlingMessage, setErrorHandlingMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        /* this is necessary to clean up the data a little bit to have the SQL database recogize the formatting of the JSON to pass it into the POST request */
        /* check if firstName and lastName are populated and not empty */
        if (firstName == '') {
            setErrorHandling(true);
            setErrorHandlingMessage('First name is not populated');
            return;
        }
        /* lastName check */
        if (lastName == '') {
            setErrorHandling(true);
            setErrorHandlingMessage('Last name is not populated');
            return;
        }
        /* data clean up of DOB */
        let formatedDOB = null;
        try {
            let DOBDate = new Date(dateOfBirth);
            formatedDOB = DOBDate.toISOString();
            formatedDOB = formatedDOB.split('.')[0];
        } catch (e) {
            /* error handling of DOB, if the error is something else print out the error onto the console, this is to distinguish what is a user error or not */
            if (dateOfBirth == '') {
                setErrorHandling(true);
                setErrorHandlingMessage('Date of birth is not populated');
                return;
            }
            console.error('There was an error within the data clean up of the date of birth', e);
        }
        /* phone number check */
        let cleanedPhoneNumber = null;
        if (phoneNumber == '') {
            setErrorHandling(true);
            setErrorHandlingMessage('Phone number is not populated');
            return;
        }
        cleanedPhoneNumber = phoneNumber.replace(/[-() ]/g, "");
        /* Lockbox selection check */
        if (selectedLockBoxRecords == null || selectedLockBoxRecords == '') {
            setErrorHandling(true);
            setErrorHandlingMessage('Lock Box selection is not populated');
            return;
        }
        /* Passport Selection box check */
        if (selectedPassportRecords == null || selectedPassportRecords == '') {
            setErrorHandling(true);
            setErrorHandlingMessage('Passport Selection box is not populated');
            return;
        }

        /* Total validation check */
        if (totalPrice !== parseFloat(totalValidation)) {
            setErrorHandling(true);
            setErrorHandlingMessage('Total and validation field are different');
            return;
        }

        /* data clean up of the date creation, and if it passes all user error cases then it will create a timestamp */
        let formattedDateCreated = null;
        let dateCreated = new Date();
        formattedDateCreated = dateCreated.toISOString();
        formattedDateCreated = formattedDateCreated.split('.')[0];
        /* for debugging, this should only be set off if all error use cases pass */
        //console.log(`Name: ${firstName} ${middleName} ${lastName}\nDate of Birth: ${dateOfBirth}\nPhone Number: ${phoneNumber}\nLock Box selection: ${selectedLockBoxRecords}\nType of Passport: ${selectedPassportRecords}\nPassport Price: ${passportPrice}\nAdded Return Services Price: ${selectedPassportARSSD}\nTotal: ${totalPrice}`);
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
            'passPortFee': passportPrice,
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
        /* this is to have a variable dedicated with the parsed JSON */
        let parsedJSON = JSON.stringify(model);
        /* debugging */
        //console.log(parsedJSON);

        /* the actual POST request and parsing through all the JSON */
        fetch('https://localhost:7243/api/entrybackup2', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: parsedJSON
        })
            .then(response => {
                /* check of successful POST request */
                if (response.status === 201) {
                    /* reset of all form fields */
                    setFirstName('');
                    setMiddleName('');
                    setLastName('');
                    setDateOfBirth('');
                    setPhoneNumber('');
                    setSelectedLockBoxRecords('');
                    setSelectedPassportRecords('');
                    setSelectedPassportARSSD('');
                }
                return response.json();
            })
            .then(data => console.log(data))
            .catch(error => console.error('Error:', error));
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

                                    <div className="totalValidation">
                                        <label className="priceValLabel">Total Price Validation:</label>
                                        <label className="priceValDollarSign">$</label>
                                        <input className="ValUserInput"
                                            type="number"
                                            value={totalValidation}
                                            onChange={e => setTotalValidation(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="submitButtonDiv">
                                <button type="submit" className="submitButton">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
                <ErrorHandlingBox isOpen={errorHandling} onClose={() => setErrorHandling(false)}>
                    <h2>Error</h2>
                    <p>{errorHandlingMessage}</p>
                </ErrorHandlingBox>
            </div>
        </>
    );
}

export default AddEntry;