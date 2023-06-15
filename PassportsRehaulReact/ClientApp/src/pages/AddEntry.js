import React, { useEffect, useState, useRef } from 'react';
import axios from '../components/axios.js';
import ApplicantInformation from "../components/ApplicantInformation";
import LockBoxDropdownMenu from "../components/LockBox";
import TypeOfPassportBox from "../components/TypeOfPassportBox";
import StateDepartment from "../components/StateDepartment";
import Banner from '../components/Banner';
import ErrorHandlingBox from '../components/MessageBox';

import "../styles/AddEntryStyles/AddEntryStyle.css";

function AddEntry() {

    /* variables for the form */
    const [currentUser, setCurrentUser] = useState('');

    /* reference to the input element, after a form gets submitted */
    const inputRef = useRef();

    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    let [dateOfBirth, setDateOfBirth] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const [lockBoxRecords, setLockBoxRecords] = useState([]);
    const [selectedLockBoxRecords, setSelectedLockBoxRecords] = useState('');

    const [passportRecords, setPassportRecords] = useState([]);
    const [selectedPassportRecords, setSelectedPassportRecords] = useState('');
    const [passportPrice, setPassportPrice] = useState('');

    const [passportARSSD, setPassportARSSD] = useState([]);
    const [selectedPassportARSSD, setSelectedPassportARSSD] = useState(0);
    const [totalPrice, setTotalPrice] = useState('');

    const [totalValidation, setTotalValidation] = useState('');

    const [errorHandling, setErrorHandling] = useState(false);
    const [errorHandlingMessage, setErrorHandlingMessage] = useState('');

    /* this code is automatically executed when the page loads, and it retrieves the current windows user's list of window groups in JSON format */
    useEffect(() => {
        axios.get('/api/User/groups')
            .then((response) => {
                setCurrentUser(response.data.user);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);

    /* this is the code that will get executed when the form is submitted */
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
        /* phone number check, if phone number is provided, it will clean it up before POST-ing to the SQL database */
        let cleanedPhoneNumber = null;
        if (phoneNumber != '') {
            cleanedPhoneNumber = phoneNumber.replace(/[-() ]/g, "");
        }
        /* Lockbox selection check */
        if (selectedLockBoxRecords == null || selectedLockBoxRecords == '') {
            setErrorHandling(true);
            setErrorHandlingMessage('Lock Box selection is not populated');
            return;
        }
        /* Passport Selection box check */
        if (selectedLockBoxRecords != 'LockBox Number 3 (DS-5504)' && (selectedPassportRecords == null || selectedPassportRecords == '')) {
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
        //console.log(`Name: ${firstName} ${middleName} ${lastName}\nDate of Birth: ${dateOfBirth}\nPhone Number: ${phoneNumber}\nLock Box selection: ${selectedLockBoxRecords}\nType of Passport: ${selectedPassportRecords}\nPassport Price: ${passportPrice}\nAdded Return Services Price: ${selectedPassportARSSD}\nTotal: ${totalPrice}\nCreated By: ${currentUser}`);

        /* this is to create the JSON model to then pass it onto the POST request */
        const model = {
            'appFirst': firstName,
            'appMiddle': middleName,
            'appLast': lastName,
            'dob': formatedDOB,
            'phone': cleanedPhoneNumber,
            'lBoxDescription': selectedLockBoxRecords,
            'passPortFee': passportPrice,
            'checkSD': totalPrice,
            'created': formattedDateCreated,
            'createdBy': currentUser,
            'total': totalPrice,
            'arssd': selectedPassportARSSD,
        };

        /* this is to have a variable dedicated with the parsed JSON */
        let parsedJSON = JSON.stringify(model);
        /* debugging */
        //console.log(parsedJSON);

        /* the actual POST request and parsing through all the JSON */
        axios.post('api/entrybackup2', parsedJSON, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => {
                if (response.status === 201) {
                    /* Reset all form values back to blank, NOT NULL */
                    setFirstName('');
                    setMiddleName('');
                    setLastName('');
                    setDateOfBirth('');
                    setPhoneNumber('');
                    setSelectedLockBoxRecords('');
                    setSelectedPassportRecords('');
                    setSelectedPassportARSSD(0);
                    setTotalValidation('');
                    /* afterwards reset the first form field to default back into the first name */
                    event.target.reset();
                    inputRef.current.focus();
                }
                console.log(response.data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    return (
        <>
            <div className="mainContainer">
                <Banner
                    header="whiteHeader" headerContent="whiteHeaderContent"
                    cityLogo="whiteCityLogo" PassportText="whitePassportText"
                />
                <div className="subHeader">
                    <label className="subHeaderText">Passport Add Entry</label>
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
                                    inputRef={inputRef}
                                />
                                <div className="secondColumn">
                                    <LockBoxDropdownMenu
                                        records={lockBoxRecords} setRecords={setLockBoxRecords}
                                        selectedRecord={selectedLockBoxRecords} setSelectedRecord={setSelectedLockBoxRecords}
                                    />

                                    <TypeOfPassportBox
                                        passportRecords={passportRecords} setPassportRecords={setPassportRecords}
                                        selectedPassportRecords={selectedPassportRecords} setSelectedPassportRecords={setSelectedPassportRecords}
                                        dateOfBirth={dateOfBirth} selectedLockBoxRecords={selectedLockBoxRecords}
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
                                            step="0.01"
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