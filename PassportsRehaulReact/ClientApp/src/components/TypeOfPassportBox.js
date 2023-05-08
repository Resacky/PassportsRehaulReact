import React, { useState, useEffect } from 'react';
import axios from 'axios';

import '../styles/AddEntryStyles/TypeOfPassportBoxStyle.css';

const TypeOfPassportBox = ({
    passportRecords, setPassportRecords,
    selectedPassportRecords, setSelectedPassportRecords
}) => {

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('here replace the new table');
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

    return (
        <div className="TypeOfPassportBoxContainer">
            <label htmlFor="recordSelect">Select Type of Passport:</label>
            <select id="recordSelect" value={selectedPassportRecords} onChange={handleSelectionChange}>
                <option value="">-- Please choose an option --</option>
                {passportRecords.map((record) => (
                    <option key={record.lockboxid} value={record.lockboxid}>
                        {record.id/* here place the json value you want represented*/}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default TypeOfPassportBox;