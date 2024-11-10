import React, { useState } from 'react';
import axios from 'axios'; // Assuming you're using axios for API calls

function AddProperty() {
  const [property, setProperty] = useState({
    title: '',
    type: '',
    address: '',
    bedrooms: 0,
    bathrooms: 0,
    area: 0,
    rent: 0,
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProperty(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/properties/add', property);
      console.log('Property added successfully:', response.data);
      // Reset form or redirect
      setProperty({
        title: '',
        type: '',
        address: '',
        bedrooms: 0,
        bathrooms: 0,
        area: 0,
        rent: 0,
        description: ''
      });
      // You might want to add a success message or redirect here
    } catch (error) {
      console.error('Error adding property:', error);
      // Handle error (e.g., show error message to user)
    }
  };

  return (
    <div className="add-property">
      <h2>Add New Property</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={property.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="type">Property Type:</label>
          <select
            id="type"
            name="type"
            value={property.type}
            onChange={handleChange}
            required
          >
            <option value="">Select Type</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="condo">Condo</option>
          </select>
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={property.address}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="bedrooms">Bedrooms:</label>
          <input
            type="number"
            id="bedrooms"
            name="bedrooms"
            value={property.bedrooms}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="bathrooms">Bathrooms:</label>
          <input
            type="number"
            id="bathrooms"
            name="bathrooms"
            value={property.bathrooms}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="area">Area (sq ft):</label>
          <input
            type="number"
            id="area"
            name="area"
            value={property.area}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="rent">Monthly Rent ($):</label>
          <input
            type="number"
            id="rent"
            name="rent"
            value={property.rent}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={property.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Add Property</button>
      </form>
    </div>
  );
}

export default AddProperty;