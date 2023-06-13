import React from 'react';

import '../styles/AddEntryStyles/ApplicantInformationStyle.css';

const ApplicantInformation = ({
    firstName, setFirstName,
    middleName, setMiddleName,
    lastName, setLastName,
    dateOfBirth, setDateOfBirth,
    phoneNumber, setPhoneNumber,
    inputRef
}) => {

    const handlePhoneNumberChange = (e) => {
        const rawValue = e.target.value.replace(/\D+/g, '');
        let formattedValue = '';

        if (rawValue.length > 0) {
            formattedValue += '(' + rawValue.substring(0, 3);
        }

        if (rawValue.length > 3) {
            formattedValue += ') ' + rawValue.substring(3, 6);
        }

        if (rawValue.length > 6) {
            formattedValue += '-' + rawValue.substring(6);
        }

        setPhoneNumber(formattedValue);
    };

    return (
        <div className="ApplicantInformationContainer">
            <label htmlFor="firstName">First Name:</label>
            <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                ref={inputRef}
            />
            <br />
            <label htmlFor="middleName">Middle Name:</label>
            <input
                type="text"
                id="middleName"
                value={middleName}
                onChange={(e) => setMiddleName(e.target.value)}
            />
            <br />
            <label htmlFor="lastName">Last Name:</label>
            <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
            />
            <br />
            <label htmlFor="dateOfBirth">Date of Birth:</label>
            <input
                type="date"
                id="dateOfBirth"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
            />
            <br />
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
                type="text"
                id="phoneNumber"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                maxLength="14"
            />
        </div>
    );
};

export default ApplicantInformation;