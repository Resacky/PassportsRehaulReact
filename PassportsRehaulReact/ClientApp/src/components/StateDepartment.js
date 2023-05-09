import React, { useState } from 'react';
import AddedReturnServicesBox from './AddedReturnServicesBox';

import '../styles/AddEntryStyles/StateDepartmentStyle.css';

const StateDepartment = () => {
    const [isConditionTrue, setIsConditionTrue] = useState(false);

    const handleButtonClick = () => {
        setIsConditionTrue(!isConditionTrue);
    };

    return (
        <div className="SDframe">
            <div className="Header">
                <label>State Department Fees</label>
            </div>
            <div className="StateDepartmentContainer">
                <div className="Passport">
                    <label>Passport</label>
                    <div>
                        <label>$0.00</label>
                    </div>
                </div>
                <div className="AddedReturnServices">
                    <label>Added Return Services</label>
                    <div>
                        <select>
                            <option>Option 1</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                        </select>
                        <label>$0.00</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StateDepartment;