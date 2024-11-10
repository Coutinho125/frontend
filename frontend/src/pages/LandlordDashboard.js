// src/pages/LandlordDashboard.js
import React, { useState, useEffect } from 'react';
import PropertyCard from '../components/PropertyCard';
import { getLandlordProperties } from '../services/landlordService';
import { useNavigate } from 'react-router-dom';

const LandlordDashboard = () => {
  const navigate = useNavigate();

  const handleAddPropertyClick = () => {
    navigate('/add-property');
  };
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    async function fetchProperties() {
      const result = await getLandlordProperties();
      setProperties(result);
    }
    fetchProperties();
  }, []);

  return (
    <div className="landlord-dashboard">
    <button onClick={handleAddPropertyClick}>Add New Property</button>
      <h2>Your Listed Properties</h2>
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}

export default LandlordDashboard;
