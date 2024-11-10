// src/components/PropertyCard.js
import React from 'react';
import '../styles/PropertyCard.css';

const PropertyCard = ({ property }) => {
  return (
    <div className="property-card">
      <h3>{property.name}</h3>
      <p>{property.description}</p>
      <p>Price: ${property.price}</p>
      <p>Rooms: {property.rooms}</p>
      <button>View Details</button>
    </div>
  );
}

export default PropertyCard;
