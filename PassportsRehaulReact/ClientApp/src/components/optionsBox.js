import React from 'react';
import '../styles/SearchAndEditEntryStyles/optionsBoxStyle.css';

const optionsBox = ({ isOpen, onClose, children }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                {children}
                <button className="errorOK" onClick={onClose}>OK</button>
            </div>
        </div>
    );
};

export default optionsBox;