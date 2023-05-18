import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { format, parseISO } from 'date-fns'; // Import date-fns functions

import '../styles/SearchAndEditEntryStyles/entryEditStyle.css';

const EntryEdit = ({
    checkedID, setCheckedID, setEditOpen, setEditSuccessMessageOpen, refreshData
}) => {
    const [editedEntry, setEditedEntry] = useState({
        EntryID: '',
        appFirst: '',
        appMiddle: '',
        appLast: '',
        dob: '',
        phone: '',
        lBoxDescription: '',
        passPortFee: '',
        created: '',
        createdBy: '',
        total: '',
        arssd: '',
        checkSD: '',
    });
    const [originalEntry, setOriginalEntry] = useState({});
    const [phoneDisplay, setPhoneDisplay] = useState('');

    const formatPhoneNumber = (phoneNum) => {
        if (phoneNum.length >= 3 && phoneNum.length < 6) {
            return `(${phoneNum.slice(0, 3)})${phoneNum.slice(3)}`;
        } else if (phoneNum.length >= 6) {
            return `(${phoneNum.slice(0, 3)})${phoneNum.slice(3, 6)}-${phoneNum.slice(6)}`;
        } else {
            return phoneNum;
        }
    }

    // Fetch data on checkedID change
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://localhost:7243/api/entrybackup2/${checkedID}`);
                let data = response.data;

                // Trim leading and trailing spaces
                for (let key in data) {
                    if (typeof data[key] === 'string') {
                        data[key] = data[key].trim();
                    }
                }

                // Format dob
                if (data.dob) {
                    const parsedDate = parseISO(data.dob);
                    data.dob = format(parsedDate, "yyyy-MM-dd"); // Use "yyyy-MM-dd" for HTML date input
                }

                // Format phone for display
                if (data.phone) {
                    setPhoneDisplay(formatPhoneNumber(data.phone));
                }

                setOriginalEntry(data);
                setEditedEntry(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        if (checkedID) {
            fetchData();
        }
    }, [checkedID]);

    const handleChange = (event) => {
        let { name, value } = event.target;

        if (name === 'phone') {
            // Remove non-digit characters for submission
            let rawValue = value.replace(/\D/g, '');

            // Limit to 10 digits
            rawValue = rawValue.slice(0, 10);

            // Update the actual phone number for submission
            setEditedEntry({
                ...editedEntry,
                [name]: rawValue
            });

            // Add brackets and hyphen for display
            if (rawValue.length >= 3 && rawValue.length < 6) {
                value = `(${rawValue.slice(0, 3)})${rawValue.slice(3)}`;
            } else if (rawValue.length >= 6) {
                value = `(${rawValue.slice(0, 3)})${rawValue.slice(3, 6)}-${rawValue.slice(6)}`;
            }
            // Update the display phone number
            setPhoneDisplay(value);
        } else {
            setEditedEntry({
                ...editedEntry,
                [name]: value.trim()
            });
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.put(`https://localhost:7243/api/entrybackup2/${checkedID}`, editedEntry);
            setEditSuccessMessageOpen(true); // set this to true after successful PUT request
            setEditOpen(false);
            refreshData(); // Refresh data after edit
        } catch (error) {
            console.error('Error updating entry:', error);
        }
    }

    // Render component
    return (
        <div>
            <h2 className="editHeader">Edit Entry</h2>
            <form className="editForm" onSubmit={handleSubmit}>
                <table className="editTable">
                    <thead>
                        <tr>
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
                        <tr>
                            <td><input type="text" name="appFirst" value={editedEntry.appFirst} onChange={handleChange} /></td>
                            <td><input type="text" name="appMiddle" value={editedEntry.appMiddle} onChange={handleChange} /></td>
                            <td><input type="text" name="appLast" value={editedEntry.appLast} onChange={handleChange} /></td>
                            <td><input type="date" name="dob" value={editedEntry.dob} onChange={handleChange} /></td>
                            <td><input type="text" name="phone" value={phoneDisplay} onChange={handleChange} /></td>
                            <td><input type="text" name="lBoxDescription" value={editedEntry.lBoxDescription} onChange={handleChange} /></td>
                            <td><input type="text" name="passPortFee" value={editedEntry.passPortFee} onChange={handleChange} /></td>
                            <td><input type="text" name="arssd" value={editedEntry.arssd} onChange={handleChange} /></td>
                            <td><input type="text" name="total" value={editedEntry.total} onChange={handleChange} /></td>
                        </tr>
                    </tbody>
                </table>
                <div className="editSubmitDiv">
                    <button className="editSubmit" type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default EntryEdit;