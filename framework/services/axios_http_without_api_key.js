const axiosNoKey = require('axios').default;
require('dotenv').config();

const axiosSpaceFalse = axiosNoKey.create({
  baseURL: process.env.baseUrl,
  headers: { Authorization: 'Bearer test' },
  validateStatus: () => true,
});

module.exports = axiosSpaceFalse;
