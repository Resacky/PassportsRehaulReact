import React, { useState } from 'react';
import Banner from '../components/Banner';
import EntryFetch from '../components/entryFetch';
import OptionsBox from '../components/optionsBox';

import '../styles/SearchAndEditEntryStyles/SearchAndEditEntryStyle.css';

function SearchAndEditEntry() {

    const [checkedID, setCheckedID] = useState();
    const [checkedStatus, setCheckedStatus] = useState(false);

    const handleCloseOptions = () => {
        setCheckedStatus(false);
    }

    return (
        <>
            <div className="mainContainer">
                <Banner
                    header="whiteHeader" headerContent="whiteHeaderContent"
                    cityLogo="whiteCityLogo" PassportText="whitePassportText"
                />
                <div class="subHeader">
                    <label class="subHeaderText">Search And Edit Entries</label>
                </div>
                <EntryFetch
                    checkedID={checkedID}
                    setCheckedID={setCheckedID}
                    setCheckedStatus={setCheckedStatus}
                />
                <OptionsBox isOpen={checkedStatus} onClose={handleCloseOptions}>
                    <h2>{checkedID}</h2>
                </OptionsBox>
            </div>
        </>
    );
}

export default SearchAndEditEntry;