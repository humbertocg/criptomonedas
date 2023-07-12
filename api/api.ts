import axios from 'axios';

const axiosConfig = {
  baseURL: 'https://min-api.cryptocompare.com',
  timeout: 3000,
};

const api = axios.create(axiosConfig);

export default api;
