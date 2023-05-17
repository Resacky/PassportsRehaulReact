import React, { useState, useEffect } from 'react';
import axios from 'axios';

import '../styles/AddEntryStyles/StateDepartmentStyle.css';

const StateDepartment = ({
    passportARSSD, setPassportARSSD,
    selectedPassportARSSD, setSelectedPassportARSSD,
    passportPrice,
    totalPrice, setTotalPrice
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

    useEffect(() => {
        // Assuming both values are numbers or can be parsed into numbers
        const total = (Number(selectedPassportARSSD) + Number(passportPrice)) || 0;
        setTotalPrice(total);
    }, [selectedPassportARSSD, passportPrice]);

    const handleSelectionChange = (e) => {
        setSelectedPassportARSSD(Number(e.target.value) || 0);
    };

    /* Define default values for labels */
    const displayPassportPrice = passportPrice ? passportPrice.toFixed(2) : '0.00';
    const displaySelectedPassportARSSD = selectedPassportARSSD ? selectedPassportARSSD.toFixed(2) : '0.00';

    selectedPassportARSSD = selectedPassportARSSD || 0;

    return (
        <div className="SDframe">
            <div className="Header">
                <label>State Department Fees</label>
            </div>
            <div className="StateDepartmentContainer">
                <div className="Passport">
                    <label>Passport</label>
                    <div>
                        <label>${displayPassportPrice}</label>
                    </div>
                </div>
                <div className="AddedReturnServices">
                    <label>Added Return Services</label>
                    <div>
                        <select id="recordSelect" value={selectedPassportARSSD || 0} onChange={handleSelectionChange}>
                            <option value={0} >-- Please choose an option --</option>
                            {passportARSSD.map((record) => (
                                <option key={record.arsDescription} value={Number(record.arsFee) || 0}>
                                    {record.arsDescription}
                                </option>
                            ))}
                        </select>
                        <label>${displaySelectedPassportARSSD}</label>
                    </div>
                </div>
                <label>Total: ${totalPrice}</label>
            </div>
        </div>
    );
};

export default StateDepartment;