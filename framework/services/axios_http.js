const axios = require('axios').default;
require('dotenv').config();

const axiosSpace = axios.create({
  baseURL: process.env.baseUrl,
  headers: { Authorization: `Bearer ${process.env.AUTH_TOKEN}`},
  validateStatus: () => true,
});

module.exports = axiosSpace;
