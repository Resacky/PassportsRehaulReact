import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { format, parseISO } from 'date-fns'; // Import date-fns functions

import '../styles/SearchAndEditEntryStyles/entryEditStyle.css';

const EntryEdit = ({
    checkedID, setCheckedID, setEditOpen, setEditSuccessMessageOpen
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
        let value = event.target.value;
        setEditedEntry({
            ...editedEntry,
            [event.target.name]: value.trim()
        });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.put(`https://localhost:7243/api/entrybackup2/${checkedID}`, editedEntry);
            setEditSuccessMessageOpen(true); // set this to true after successful PUT request
            setCheckedID(null);  // Reset selection after successful PUT request
            setEditOpen(false);
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
                            <td><input type="text2" name="appFirst" value={editedEntry.appFirst} onChange={handleChange} /></td>
                            <td><input type="text2" name="appMiddle" value={editedEntry.appMiddle} onChange={handleChange} /></td>
                            <td><input type="text2" name="appLast" value={editedEntry.appLast} onChange={handleChange} /></td>
                            <td><input type="date" name="dob" value={editedEntry.dob} onChange={handleChange} /></td>
                            <td><input type="text2" name="phone" value={editedEntry.phone} onChange={handleChange} /></td>
                            <td><input type="text2" name="lBoxDescription" value={editedEntry.lBoxDescription} onChange={handleChange} /></td>
                            <td><input type="text2" name="passPortFee" value={editedEntry.passPortFee} onChange={handleChange} /></td>
                            <td><input type="text2" name="arssd" value={editedEntry.arssd} onChange={handleChange} /></td>
                            <td><input type="text2" name="total" value={editedEntry.total} onChange={handleChange} /></td>
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