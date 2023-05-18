import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';

/* list of pages */
import AddEntry from './pages/AddEntry';
import SearchAndEditEntry from './pages/SearchAndEditEntry';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

/* This is the start of the webapp */
root.render(
    <>
        <Router>
            <Routes>
                <Route path="/" element={<Navigate from="/" to="/AddEntry" />} />
                <Route path="/AddEntry" element={<AddEntry />} />
                <Route path="/SearchAndEditEntry" element={<SearchAndEditEntry />} />
            </Routes>
        </Router>
    </>
);