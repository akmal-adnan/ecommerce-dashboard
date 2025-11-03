import axios from 'axios';

const shazamClient = axios.create({
  baseURL: 'https://dummyjson.com',
  timeout: 10000,
});

export default shazamClient;
