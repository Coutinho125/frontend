// src/pages/Home.js


import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Header */}
      <h1>Welcome to the Online Home Rental System</h1>

      {/* Search Bar */}
      <input type="text" placeholder="Search for properties..." className="search-bar" />

      {/* Links to Other Sections */}
      <div className="navigation-links">
        <Link to="/property-listings">Property Listings</Link> | 
        <Link to="/login">Login</Link> | 
        <Link to="/register">Register</Link>
      </div>

      {/* Featured Properties Section */}
      <div className="featured">
        <h2>Featured Properties</h2>
        {/* Add logic here to display a list of featured properties, e.g., use a component to display each property */}
      </div>

      {/* Authentication Links for Tenant and Landlord */}
      <div className="auth-links">
        <Link to="/login-tenant">Tenant Login</Link> | 
        <Link to="/login-landlord">Landlord Login</Link>
      </div>
      
      {/* Dashboard, Bookings, and Notifications - Links (for demo purposes) */}
      <div className="user-actions">
        <Link to="/dashboard">Dashboard</Link> | 
        <Link to="/bookings">Bookings</Link> | 
        <Link to="/notifications">Notifications</Link>
      </div>
    </div>
  );
};

export default Home;
