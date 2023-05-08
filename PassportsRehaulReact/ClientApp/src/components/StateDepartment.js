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
                <div className="ColumnLabels">
                    <label>a</label>
                </div>
                <div className="InfoLabels">
                    <label>a</label>
                </div>
            </div>
        </div>
    );
};

export default StateDepartment;