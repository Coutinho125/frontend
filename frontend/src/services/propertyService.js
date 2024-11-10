// src/services/propertyService.js
import axios from 'axios';

export const searchProperties = async (query) => {
  const response = await axios.get(`/api/properties?search=${query}`);
  return response.data;
};
