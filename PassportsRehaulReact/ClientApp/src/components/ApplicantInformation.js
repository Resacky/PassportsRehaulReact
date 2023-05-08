import React from 'react';

const ApplicantInformation = ({
    firstName, setFirstName,
    middleName, setMiddleName,
    lastName, setLastName,
    dateOfBirth, setDateOfBirth,
    phoneNumber, setPhoneNumber
}) => {
    return (
        <div>
            <label htmlFor="firstName">First Name:</label>
            <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
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
                type="tel"
                id="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
            />
        </div>
    );
};

export default ApplicantInformation;