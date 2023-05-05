import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Template from './pages/Template';
import DisplayEmployeeTable from './pages/DisplayEmployeeTable';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

/* This is the start of the webapp */
root.render(
    <>
        <Router>
            <Routes>
                <Route path="/" element={<Template />} />
                <Route path="/DisplayEmployeeTable" element={<DisplayEmployeeTable />} />
            </Routes>
        </Router>
    </>
);