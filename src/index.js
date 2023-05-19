import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import App from './components/App';
import Search from './components/Search'
import FanficsPage from './components/FanficsPage';
import FavoritesPage from './components/FavoritesPage';

import './stylesheets/index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/Home" element={<App/>} />
            <Route path="/Fanfics" element={<FanficsPage/>} />
            <Route path="/Favorites" element={<FavoritesPage/>} />
            <Route path="/Search" element={<Search/>} />
            <Route path="*" element={<Navigate to="/Home" replace />} />
        </Routes>
    </BrowserRouter>
);
