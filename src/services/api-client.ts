import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '87e16417e30e4b088bf541ff006d8b43',
  },
});

export default apiClient;
