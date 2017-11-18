import { create } from 'axios';
import { decamelizeKeys, camelizeKeys } from 'humps';

const api = create({
  baseURL: 'http://cartolazo.now.sh/api/cartola?url=',
  responseType: 'json',
  timeout: 10000,
});

api.interceptors.request.use(request => ({
  ...request, data: decamelizeKeys(request.data),
}));

api.interceptors.response.use(response => ({
  ...response, data: camelizeKeys(response.data),
}));

export default api;
