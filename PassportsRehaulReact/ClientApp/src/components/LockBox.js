import React, { useState, useEffect } from 'react';
import axios from 'axios';

import '../styles/AddEntryStyles/LockBoxStyle.css';

const LockBoxDropdownMenu = ({
    records, setRecords,
    selectedRecord, setSelectedRecord
}) => {

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://localhost:7243/api/PassPortLockBoxes');
                setRecords(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleSelectionChange = (e) => {
        setSelectedRecord(e.target.value.trim());
    };

    return (
        <div className="LockBoxContainer">
            <label htmlFor="recordSelect">Lock Box:</label>
            <select id="recordSelect" value={selectedRecord} onChange={handleSelectionChange}>
                <option value="">-- Please choose an option --</option>
                {records.map((record) => {
                    const trimmedDescription = record.lBoxDescription.trim();
                    return (
                        <option key={record.lockboxid} value={trimmedDescription}>
                            {trimmedDescription}
                        </option>
                    );
                })}
            </select>
        </div>
    );
};

export default LockBoxDropdownMenu;