const { create } = require('axios');

const api = create({
  baseURL: 'https://api.cartolafc.globo.com',
  responseType: 'json',
  timeout: 10000,
});

module.exports = ({ url, method, data }) =>
  api({ method, url, data });
