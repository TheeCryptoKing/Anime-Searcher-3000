import React from 'react';
import ReactDOM from 'react-dom/client';
import './stylesheets/index.css';
import App from './components/App';
import Search from './components/Search'
import FanficsPage from './components/FanficsPage';
import FavoritesPage from './components/FavoritesPage';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/Home" element={<App/>} />
            <Route path="/Fanfics" element={<FanficsPage/>} />
            <Route path="/Favorites" element={<FavoritesPage/>} />
            <Route path="/Search" element={<Search/>} />
            {/* "*" Indicates that route will match anything and reroute to home */}
            <Route path="*" element={<Navigate to="/Home" replace />} />
        </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

