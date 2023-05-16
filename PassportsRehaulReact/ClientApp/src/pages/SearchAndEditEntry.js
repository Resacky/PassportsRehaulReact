import React, { useState } from 'react';
import Banner from '../components/Banner';
import EntryFetch from '../components/entryFetch';
import optionsBox from '../components/optionsBox';

import '../styles/SearchAndEditEntryStyles/SearchAndEditEntryStyle.css';

function SearchAndEditEntry() {


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
                <EntryFetch />
            </div>
        </>
    );
}

export default SearchAndEditEntry;