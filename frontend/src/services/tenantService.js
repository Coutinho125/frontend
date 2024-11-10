// src/services/tenantService.js
import axios from 'axios';

export const getTenantProperties = async () => {
  const response = await axios.get('/api/tenant/properties');
  return response.data;
};
