// src/pages/PropertySearch.js
import React, { useState } from 'react';
import PropertyCard from '../components/PropertyCard';
import SearchBar from '../components/SearchBar';
import { searchProperties } from '../services/propertyService';

const PropertySearch = () => {
  const [properties, setProperties] = useState([]);

  const handleSearch = async (query) => {
    const result = await searchProperties(query);
    setProperties(result);
  };

  return (
    <div className="property-search">
      <SearchBar onSearch={handleSearch} />
      <div className="property-list">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
}

export default PropertySearch;
