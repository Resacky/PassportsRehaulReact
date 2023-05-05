import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddedReturnServicesBox = () => {
    const [records, setRecords] = useState([]);
    const [selectedRecord, setSelectedRecord] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('here replace the new table');
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
            <label htmlFor="recordSelect">Added Return Services:</label>
            <select id="recordSelect" value={selectedRecord} onChange={handleSelectionChange}>
                <option value="">-- Please choose an option --</option>
                {records.map((record) => (
                    <option key={record.lockboxid} value={record.lockboxid}>
                        {record.id/* here place the json value you want represented*/}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default AddedReturnServicesBox;