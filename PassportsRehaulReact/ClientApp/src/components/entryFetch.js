import React, { useState, useEffect } from 'react';
import axios from 'axios';

import '../styles/SearchAndEditEntryStyles/entryFetchStyle.css';

const EntryFetch = () => {
    const [entryData, setEntryData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://localhost:7243/api/entrybackup2/234859');
                setEntryData([response.data]);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <h2>Entry Database</h2>
            <table>
                <thead>
                    <tr>
                        <th>Created</th>
                        <th>First Name</th>
                        <th>Middle Name</th>
                        <th>Last Name</th>
                        <th>Date of Birth</th>
                        <th>Phone</th>
                        <th>Box Description</th>
                        <th>ARSSD</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {entryData.map(item => (
                        <tr key={item.entryid}>
                            <td>{item.created}</td>
                            <td>{item.appFirst}</td>
                            <td>{item.appMiddle}</td>
                            <td>{item.appLast}</td>
                            <td>{item.dob}</td>
                            <td>{item.phone}</td>
                            <td>{item.lBoxDescription}</td>
                            <td>${item.arssd}</td>
                            <td>${item.total}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EntryFetch;