import React from 'react';
import { Routes, Route,BrowserRouter } from 'react-router-dom';
import HomePage from './components/HomePage';
import InventoryPage from './components/InventoryPage';

function App() {
return (
    <BrowserRouter>
<Routes>
<Route path="/" element={<HomePage />} />
<Route path="/inventory" element={<InventoryPage />} />
</Routes>
</BrowserRouter>
);
}

export default App;