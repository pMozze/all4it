import xior from 'xior';

const api = xior.create({
  baseURL: process.env.API_URL,
  cache: 'no-cache'
});

export default api;
