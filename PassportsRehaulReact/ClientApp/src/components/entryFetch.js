import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
        <>
            <div>
                <h2>Entry Database</h2>
                <ul>
                    {entryData.map(item => (
                        <li key={item.entryid}>
                            {item.appFirst}, {item.appMiddle}, {item.appLast}, {item.dob}, {item.zipcode}, {item.phone}, {item.regularpass}, {item.nofeepass}, {item.amendedpass}, {item.lboxdescription}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default EntryFetch;