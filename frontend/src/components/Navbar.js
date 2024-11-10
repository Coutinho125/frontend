// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/property-search">Search Properties</Link>
      <Link to="/tenant-dashboard">Tenant Dashboard</Link>
    </nav>
  );
}

export default Navbar;
