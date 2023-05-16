import React from 'react';
import '../styles/SearchAndEditEntryStyles/optionsBoxStyle.css';

const OptionsBox = ({
    isOpen, onClose, onEdit, onDelete, children
}) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                {children}
                <button className="option-button" onClick={onEdit}>Edit</button>
                <button className="option-button" onClick={onDelete}>Delete</button>
                <button className="option-button" onClick={onClose}>Cancel</button>
            </div>
        </div>
    );
};

export default OptionsBox;