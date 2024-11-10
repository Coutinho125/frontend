// src/pages/TenantDashboard.js
import React, { useState, useEffect } from 'react';
import PropertyCard from '../components/PropertyCard';
import { getTenantProperties } from '../services/tenantService';

const TenantDashboard = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    async function fetchProperties() {
      const result = await getTenantProperties();
      setProperties(result);
    }
    fetchProperties();
  }, []);

  return (
    <div className="tenant-dashboard">
      <h2>Your Saved Properties</h2>
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}

export default TenantDashboard;
