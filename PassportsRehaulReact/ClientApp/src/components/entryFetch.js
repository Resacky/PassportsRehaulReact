import React, { useState, useEffect } from 'react';
import axios from '../components/axios.js';
import moment from 'moment';

import '../styles/SearchAndEditEntryStyles/entryFetchStyle.css';

const EntryFetch = ({
    checkedID, setCheckedID, setCheckedStatus, refreshToggle,
}) => {
    const [entryData, setEntryData] = useState([]);
    const [appFirst, setAppFirst] = useState('');
    const [appLast, setappLast] = useState('');
    const [dob, setDob] = useState('');
    const [phone, setPhone] = useState('');
    const [createdBy, setCreatedBy] = useState('');
    const [page, setPage] = useState(1);

    const [searchParams, setSearchParams] = useState({
        appFirst: '',
        appLast: '',
        dob: '',
        phone: '',
        createdBy: '',
    });

    const handleSearchChange = (event) => {
        const { name, value } = event.target;
        let newValue = value;
        if (name === 'phone') {
            // Remove all non-digit characters from the input
            const digitsOnly = value.replace(/\D/g, '');

            // If more than 10 digits, remove the extra
            const trimmed = digitsOnly.slice(0, 10);

            // Now format the remaining digits
            newValue = formatPhoneNumber(trimmed);
        }
        setSearchParams(prevParams => ({
            ...prevParams,
            [name]: newValue,
        }));
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        setAppFirst(searchParams.appFirst);
        setappLast(searchParams.appLast);
        setDob(searchParams.dob);
        setPhone(unformatPhoneNumber(searchParams.phone)); // Unformat here
        setCreatedBy(searchParams.createdBy);
        setPage(1);  // reset page to 1 when a new search is made
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`api/entrybackup2/search?appFirst=${appFirst}&appLast=${appLast}&dob=${dob}&phone=${phone}&createdBy=${createdBy}&page=${page}&size=20`);
                setEntryData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [appFirst, appLast, dob, phone, createdBy, page, refreshToggle]);

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

    const formatPhoneNumber = (phoneNumberString) => {
        const cleaned = ('' + phoneNumberString).replace(/\D/g, '');
        const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
        if (match) {
            return '(' + match[1] + ')' + match[2] + '-' + match[3];
        }
        return phoneNumberString;
    };

    const unformatPhoneNumber = (formattedPhoneNumber) => {
        const cleaned = ('' + formattedPhoneNumber).replace(/\D/g, '');
        return cleaned;
    };

    return (
        <div>
            <h2 className="header">Entry Database</h2>

            <form onSubmit={handleSearchSubmit} className="filterSearch">
                <input className="filterElement" type="text" name="appFirst" value={searchParams.appFirst} onChange={handleSearchChange} placeholder="First Name" />
                <input className="filterElement" type="text" name="appLast" value={searchParams.appLast} onChange={handleSearchChange} placeholder="Last Name" />
                <input className="filterElement" type="date" name="dob" value={searchParams.dob} onChange={handleSearchChange} placeholder="DOB" />
                <input className="filterElement" type="text" name="phone" value={searchParams.phone} onChange={handleSearchChange} placeholder="Phone" />
                <input className="filterElement" type="text" name="createdBy" value={searchParams.createdBy} onChange={handleSearchChange} placeholder="Created By" />
                <button className="filterElement" type="submit">Search</button>
            </form>

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