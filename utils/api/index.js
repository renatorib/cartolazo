import { create } from 'axios';
import { decamelizeKeys, camelizeKeys } from 'humps';

const api = create({
  baseURL: 'http://localhost:3000/api/cartola?url=',
  responseType: 'json',
  timeout: 10000,
});

api.interceptors.request.use(request => ({
  ...request, data: decamelizeKeys(request.data),
}));

api.interceptors.response.use(response => ({
  ...response, data: camelizeKeys(response.data),
}));

api.setState = (uri, path, _this) => (
  api.get(uri).then(({ data }) => (
    _this.setState({ [path]: data })
  ))
);

export default api;
