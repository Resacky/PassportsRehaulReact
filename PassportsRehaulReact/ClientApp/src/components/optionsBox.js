import React from 'react';
import '../styles/SearchAndEditEntryStyles/optionsBoxStyle.css';

const OptionsBox = ({
    isOpen, onClose, onEdit, onDelete, isPassportDeleteGroup, children
}) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div>{children}</div>
                {
                    /* this is to check the boolean if they have the PassportDelete group */
                    isPassportDeleteGroup ? (
                        <div className="buttons-container">
                            <button className="option-button" onClick={onEdit}>Edit</button>
                            <button className="option-button" onClick={onDelete}>Delete</button>
                            <button className="option-button" onClick={onClose}>Cancel</button>
                        </div>
                    ) : <p>Insufficient Access</p>
                }
            </div>
        </div>
    );
};

export default OptionsBox;