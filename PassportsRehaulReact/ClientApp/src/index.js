import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Template from './pages/Template';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

/* This is the start of the webapp */
root.render(
    <>
        <Router>
            <Routes>
                <Route path="/" element={<Template />} />
            </Routes>
        </Router>
    </>
);