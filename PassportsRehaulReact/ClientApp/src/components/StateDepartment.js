import React, { useState, useEffect } from 'react';
import axios from 'axios';

import '../styles/AddEntryStyles/StateDepartmentStyle.css';

const StateDepartment = ({
    passportARSSD, setPassportARSSD,
    selectedPassportARSSD, setSelectedPassportARSSD,
    passportPrice
}) => {

    /* This is used to communicate with the controller ASP.NET Core API to retrieve back the JSON of the SQL DB in question, any changes should reflect ASAP */
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://localhost:7243/api/PassPortARSSDs');
                setPassportARSSD(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleSelectionChange = (e) => {
        setSelectedPassportARSSD(e.target.value);
    };

    return (
        <div className="SDframe">
            <div className="Header">
                <label>State Department Fees</label>
            </div>
            <div className="StateDepartmentContainer">
                <div className="Passport">
                    <label>Passport</label>
                    <div>
                        <label>${passportPrice}</label>
                    </div>
                </div>
                <div className="AddedReturnServices">
                    <label>Added Return Services</label>
                    <div>
                        <select id="recordSelect" value={setSelectedPassportARSSD} onChange={handleSelectionChange}>
                            <option value="">-- Please choose an option --</option>
                            {passportARSSD.map((record) => (
                                <option key={record.arsDescription} value={record.arsFee}>
                                    {record.arsDescription}
                                </option>
                            ))}
                        </select>
                        <label>${setSelectedPassportARSSD}</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StateDepartment;