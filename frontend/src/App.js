// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import TenantDashboard from './pages/TenantDashboard';
import PropertySearch from './pages/PropertySearch';
import LandlordDashboard from './pages/LandlordDashboard';
import './styles/global.css';
import AddProperty from './components/Property/AddProperty';


function App() {
  return (
    <Router>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/property-search" element={<PropertySearch />} />
        <Route path="/tenant-dashboard" element={<TenantDashboard />} />
        <Route path="/landlord-dashboard" element={<LandlordDashboard />} />
        <Route path="/add-property" element={<AddProperty />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;


