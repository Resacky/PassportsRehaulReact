import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LockBoxDropdownMenu = () => {
    const [records, setRecords] = useState([]);
    const [selectedRecord, setSelectedRecord] = useState(null);

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

    const handleSelectionChange = (event) => {
        setSelectedRecord(event.target.value);
    };

    return (
        <div>
            <label htmlFor="recordSelect">Lock Box:</label>
            <select id="recordSelect" value={selectedRecord} onChange={handleSelectionChange}>
                <option value="">-- Please choose an option --</option>
                {records.map((record) => (
                    <option key={record.lockboxid} value={record.lockboxid}>
                        {record.lBoxDescription}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default LockBoxDropdownMenu;