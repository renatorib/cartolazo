const { create } = require('axios');

const api = create({
  baseURL: 'https://login.globo.com/api/',
  responseType: 'json',
  timeout: 10000,
});

module.exports = ({ url, method, data }) =>
  api({ method, url, data });
