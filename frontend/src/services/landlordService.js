// src/services/landlordService.js
import axios from 'axios';

export const getLandlordProperties = async () => {
  const response = await axios.get('/api/landlord/properties');
  return response.data;
};
