import React, { useState } from 'react';
import AddedReturnServicesBox from './AddedReturnServicesBox';

const StateDepartment = () => {
    const [isConditionTrue, setIsConditionTrue] = useState(false);

    const handleButtonClick = () => {
        setIsConditionTrue(!isConditionTrue);
    };

    return (
        <div>
            <label>State Department Fees</label>
            <br />
            <label>Passport</label>
            <br />
            //This label is for the passport amount dependent on what the user choose for the type of passport // 
            <label>{isConditionTrue ? 'Text when condition is true' : 'Text when condition is false'}</label>
            <br />
            <AddedReturnServicesBox />
            <br />
            <label>Dependent to change based on option chosen above</label>
            <br />
            <label>Total amount</label>
            <br />
            <button onClick={handleButtonClick}>Toggle Condition</button>
        </div>
    );
};

export default StateDepartment;