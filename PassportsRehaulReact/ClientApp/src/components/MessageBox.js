﻿import React from 'react';
import '../styles/MessageBoxStyle.css';

const Modal = ({ isOpen, onClose, children }) => {
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

export default Modal;