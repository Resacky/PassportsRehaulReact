import React from 'react';
import '../styles/SearchAndEditEntryStyles/optionsBoxStyle.css';

const OptionsBox = ({
    isOpen, onClose, onEdit, onDelete, isPassportDeleteGroup, isPassportEditGroup, children
}) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div>{children}</div>
                <div className="buttons-container">
                    {isPassportEditGroup ? <button className="option-button" onClick={onEdit}>Edit</button> : <p className="InsufficientAccess">Insufficient Edit Access</p>}
                    {isPassportDeleteGroup ? <button className="option-button" onClick={onDelete}>Delete</button> : <p className="InsufficientAccess">Insufficient Delete Access</p>}
                    <button className="option-button" onClick={onClose}>Cancel</button>
                </div>
            </div>
        </div >
    );
};

export default OptionsBox;