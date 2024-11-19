import xior from 'xior';

const api = xior.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  cache: 'no-cache'
});

export default api;
