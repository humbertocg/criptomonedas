/**
 * api documentation
 * https://min-api.cryptocompare.com/documentation
 *
 * for more info
 */
import axios from 'axios';

const axiosConfig = {
  baseURL: 'https://min-api.cryptocompare.com',
  timeout: 3000,
};

const api = axios.create(axiosConfig);

export default api;
