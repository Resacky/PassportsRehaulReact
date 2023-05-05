import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

/* list of pages */
import Home from './pages/Home';
import AddEntry from './pages/AddEntry';
import SearchAndEditEntry from './pages/SearchAndEditEntry';
import SelectAReport from './pages/SelectAReport';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

/* This is the start of the webapp */
root.render(
    <>
        <Router>
            <Routes>
                <Route path="/Home" element={<Home />} />
                <Route path="/AddEntry" element={<AddEntry />} />
                <Route path="/SearchAndEditEntry" element={<SearchAndEditEntry />} />
                <Route path="/SelectReporting" element={<SelectAReport />} />
            </Routes>
        </Router>
    </>
);