import React, { useState, useEffect } from 'react';
import { differenceInYears } from 'date-fns';
import axios from 'axios';

import '../styles/AddEntryStyles/TypeOfPassportBoxStyle.css';

let TypeOfPassportBox = ({
    passportRecords, setPassportRecords,
    selectedPassportRecords, setSelectedPassportRecords,
    dateOfBirth, selectedLockBoxRecords,
    passportPrice, setPassportPrice
}) => {

    /* This is used to communicate with the controller ASP.NET Core API to retrieve back the JSON of the SQL DB in question, any changes should reflect ASAP */
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://localhost:7243/api/PassportNewFees');
                setPassportRecords(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (selectedLockBoxRecords === 'LockBox Number 3 (DS-5504)') {
            setPassportPrice(0);
        } else if (selectedPassportRecords) {
            findCorrespondingValue(selectedPassportRecords);
        }
    }, [selectedLockBoxRecords]);

    useEffect(() => {
        if (selectedPassportRecords && selectedLockBoxRecords !== 'LockBox Number 3 (DS-5504)') {  // If a record is already selected
            findCorrespondingValue(selectedPassportRecords);  // Recalculate the price
        }
    }, [dateOfBirth]);  // Run this effect whenever dateOfBirth changes

    const handleSelectionChange = (e) => {
        setSelectedPassportRecords(e.target.value);
        if (selectedLockBoxRecords !== 'LockBox Number 3 (DS-5504)') { // Add this line
            findCorrespondingValue(e.target.value);
        }
    };

    /* function for the logic of establishing how old the individual is relative to the 16 year old threshold */
    function isAdult(dateOfBirth) {
        /* this is to check if the user placed in a DOB to begin with, if not give them the adult price by default */
        if (!dateOfBirth) {
            return true;
        }
        const dob = new Date(dateOfBirth);
        const today = new Date();

        /* Calculate the difference between the current date and the date of birth using the date-fns library */
        const ageInYears = differenceInYears(today, dob);

        /* Check if the person is 16 years or older, if so, categorize them as an 'adult' */
        if (ageInYears >= 16) {
            return true;
        }

        /* else default them as a 'minor' */
        return false;
    }

    /* there is a bug with the way the options dropdown menu works with records having the same price, weather minor or adult, so I am doing another cross reference using the records.sort as the key
    and deriving the price within the backend programming instead of deriving it through the select div */
    const findCorrespondingValue = (sort) => {
        //console.log('Sort value:', sort); // Debug line

        const record = passportRecords.find(record => {
            //console.log('Current record:', record); // Debug line
            return record.sort == sort;
        });

        //console.log('Found record:', record); // Debug line

        if (record) { // Check if record is defined
            const value = isAdult(dateOfBirth) ? record.adult : record.minor;
            /* have this set the variable of the price that is paid */
            setPassportPrice(value);
            //console.log('Calculated value:', value); // Debug line
        } else {
            /* have this set the variable $0.00 for debugging purposes */
            setPassportPrice(0);
            //console.log(`No record found with sort value: ${sort}`);
        }
    };

    return (
        <div className="TypeOfPassportBoxContainer">
            <label htmlFor="recordSelect">Select Type of Passport:</label>
            <select id="recordSelect" value={selectedPassportRecords} onChange={handleSelectionChange}>
                <option value="">-- Please choose an option --</option>
                {passportRecords.map((record) => (
                    <option key={record.feeDescription} value={record.sort}>
                        {record.feeDescription}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default TypeOfPassportBox;