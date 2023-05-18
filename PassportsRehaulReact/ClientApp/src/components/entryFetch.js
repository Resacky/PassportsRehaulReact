import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';

import '../styles/SearchAndEditEntryStyles/entryFetchStyle.css';

const EntryFetch = ({
    checkedID, setCheckedID, setCheckedStatus,
}) => {
    const [entryData, setEntryData] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://localhost:7243/api/entrybackup2/recent?page=${page}&size=20`);
                setEntryData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [page]);

    const handleChange = (event) => {
        setCheckedID(event.target.name);
        setCheckedStatus(event.target.checked);
    }

    const handlePageChange = (event) => {
        const pageNumber = Number(event.target.value);
        if (pageNumber) {
            setPage(pageNumber);
        }
    }

    return (
        <div>
            <h2 className="header">Entry Database</h2>
            <table>
                <thead>
                    <tr>
                        <th>Select</th>
                        <th>EntryID</th>
                        <th>Created</th>
                        <th>First Name</th>
                        <th>Middle Name</th>
                        <th>Last Name</th>
                        <th>Date of Birth</th>
                        <th>Phone</th>
                        <th>Box Description</th>
                        <th>Passport Price</th>
                        <th>ARSSD</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {entryData.map(item => {
                        let createdDate = moment.utc(item.created).local();
                        let formattedCreated = createdDate.format('MM/DD/YYYY, h:mm:ss A');

                        let dob = moment(item.dob);
                        let formattedDob = dob.format('MM/DD/YYYY');
                        return (
                            <tr key={item.entryid}>
                                <td><input type="checkbox" name={item.entryid} checked={checkedID === item.entryid} onChange={handleChange} /></td>
                                <td>{item.entryid}</td>
                                <td>{formattedCreated}</td>
                                <td>{item.appFirst}</td>
                                <td>{item.appMiddle}</td>
                                <td>{item.appLast}</td>
                                <td>{formattedDob}</td>
                                <td>{item.phone}</td>
                                <td>{item.lBoxDescription}</td>
                                <td>${item.passPortFee}</td>
                                <td>${item.arssd || 0}</td>
                                <td>${item.total || 0}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <div className="pagination-buttons">
                <button disabled={page === 1} onClick={() => setPage(page - 1)}>Previous</button>
                <input type="number" value={page} onChange={handlePageChange} min={1} />
                <button onClick={() => setPage(page + 1)}>Next</button>
            </div>
        </div>
    );
};

export default EntryFetch;