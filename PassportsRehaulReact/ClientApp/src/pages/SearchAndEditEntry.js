import React, { useState } from 'react';
import axios from '../components/axios.js';
import Banner from '../components/Banner';
import EntryFetch from '../components/entryFetch';
import EntryEdit from '../components/EntryEdit';
import OptionsBox from '../components/optionsBox';
import MessageBox from '../components/MessageBox';

import '../styles/SearchAndEditEntryStyles/SearchAndEditEntryStyle.css';

function SearchAndEditEntry() {

    const [checkedID, setCheckedID] = useState();
    const [checkedStatus, setCheckedStatus] = useState(false);

    const [editOpen, setEditOpen] = useState(false);
    const [editSuccessMessageOpen, setEditSuccessMessageOpen] = useState(false);

    const [messageOpen, setMessageOpen] = useState(false);
    const [message, setMessage] = useState('');

    const [refreshToggle, setRefreshToggle] = useState(false);

    const toggleRefresh = () => {
        setRefreshToggle(!refreshToggle);
    };

    const handleCloseOption = () => {
        setCheckedStatus(false);
    }

    const handleEditOption = () => {
        handleCloseOption();
        setEditOpen(true);
    }

    const handleDeleteOption = async () => {
        try {
            const response = await axios.delete(`api/entrybackup2/${checkedID}`);
            console.log(response);
            console.log("Successfully deleted entry with ID: ", checkedID);
            setCheckedID(null);  // Reset checkedID after deletion
            toggleRefresh(); // Refresh data after deletion
        } catch (error) {
            console.error("Error deleting entry: ", error);
        }
        handleCloseOption();
        setMessage('Successfully deleted entry with ID: ' + checkedID);
        setMessageOpen(true);
    };

    return (
        <>
            <div className="mainContainer">
                <Banner
                    header="whiteHeader" headerContent="whiteHeaderContent"
                    cityLogo="whiteCityLogo" PassportText="whitePassportText"
                />
                <div className="subHeader">
                    <label className="subHeaderText">Search And Edit Entries</label>
                </div>
                <EntryFetch
                    checkedID={checkedID}
                    setCheckedID={setCheckedID}
                    setCheckedStatus={setCheckedStatus}
                    refreshToggle={refreshToggle}
                />
                <OptionsBox
                    isOpen={checkedStatus}
                    onClose={handleCloseOption}
                    onEdit={handleEditOption}
                    onDelete={handleDeleteOption}
                >
                    <h2>{checkedID}</h2>
                </OptionsBox>
                <MessageBox
                    isOpen={editOpen}
                    onClose={() => setEditOpen(false)}
                >
                    <div className="EditEntryDiv">
                        <EntryEdit
                            checkedID={checkedID}
                            setCheckedID={setCheckedID}
                            setEditOpen={setEditOpen}
                            setEditSuccessMessageOpen={setEditSuccessMessageOpen}
                            refreshData={toggleRefresh}
                        />
                    </div>
                </MessageBox>
                <MessageBox
                    isOpen={messageOpen}
                    onClose={() => setMessageOpen(false)}
                >
                    <p>{message}</p>
                </MessageBox>
                <MessageBox
                    isOpen={editSuccessMessageOpen}
                    onClose={() => setEditSuccessMessageOpen(false)}
                >
                    <p>Edit on record {checkedID} successful</p>
                </MessageBox>
            </div>
        </>
    );
}

export default SearchAndEditEntry;