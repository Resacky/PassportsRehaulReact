import React from 'react';
import DataList from '../components/DBfetch';

function DisplayEmployeeTable() {
    return (
        <>
            <div className="App">
                <header className="App-header">
                    <h1>My React App</h1>
                </header>
                <main>
                    <DataList />
                </main>
            </div>
        </>
    );
}

export default DisplayEmployeeTable;