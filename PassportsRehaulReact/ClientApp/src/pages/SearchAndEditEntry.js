import React, { useState } from 'react';
import Banner from '../components/Banner';
import EntryFetch from '../components/entryFetch';
import OptionsBox from '../components/optionsBox';

import '../styles/SearchAndEditEntryStyles/SearchAndEditEntryStyle.css';

function SearchAndEditEntry() {

    const [checkedID, setCheckedID] = useState();
    const [checkedStatus, setCheckedStatus] = useState(false);

    const handleCloseOption = () => {
        setCheckedStatus(false);
    }

    const handleEditOption = () => {
        // your edit logic here
        console.log("Editing entry with ID: ", checkedID);
    }

    const handleDeleteOption = () => {
        // your delete logic here
        console.log("Deleting entry with ID: ", checkedID);
    }

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
                />
                <OptionsBox
                    isOpen={checkedStatus}
                    onClose={handleCloseOption}
                    onEdit={handleEditOption}
                    onDelete={handleDeleteOption}
                >
                    <h2>{checkedID}</h2>
                </OptionsBox>
            </div>
        </>
    );
}

export default SearchAndEditEntry;