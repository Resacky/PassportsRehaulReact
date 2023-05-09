import React, { useState, useEffect } from 'react';
import { differenceInYears } from 'date-fns';
import axios from 'axios';

import '../styles/AddEntryStyles/TypeOfPassportBoxStyle.css';

const TypeOfPassportBox = ({
    passportRecords, setPassportRecords,
    selectedPassportRecords, setSelectedPassportRecords,
    dateOfBirth
}) => {

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

    const handleSelectionChange = (e) => {
        setSelectedPassportRecords(e.target.value);
    };

    /* function for the logic of establishing how old the individual is relative to the 16 year old threshold */
    function isAdult(dateOfBirth) {
        /* this is to check if the user placed in a dob to begin with, if not give them the adult price by default */
        if (!dateOfBirth) {
            return true;
        }
        const dob = new Date(dateOfBirth);
        const today = new Date();

        /* Calculate the difference between the current date and the date of birth using the date-fns library */
        const ageInYears = differenceInYears(today, dob);

        /* Check if the person is 16 years or older */
        if (ageInYears >= 16) {
            return true;
        }

        return false;
    }

    return (
        <div className="TypeOfPassportBoxContainer">
            <label htmlFor="recordSelect">Select Type of Passport:</label>
            <select id="recordSelect" value={selectedPassportRecords} onChange={handleSelectionChange}>
                <option value="">-- Please choose an option --</option>
                {passportRecords.map((record) => (
                    <option key={record.sort} value={record.sort}>
                        {record.feeDescription}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default TypeOfPassportBox;