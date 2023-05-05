import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DataList = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://localhost:7243/api/Employees');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <div>
                <h2>Data List</h2>
                <ul>
                    {data.map(item => (
                        <li key={item.id}>
                            {item.name}, {item.email}, {item.cityphone}, {item.cityCell}, {item.radio}, {item.idnum}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default DataList;