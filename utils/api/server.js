import { create } from 'axios'
import { decamelizeKeys, camelizeKeys } from 'humps'

let baseURL
if (process.env.NODE_ENV === 'production') {
  baseURL = 'https://cartolazo.now.sh/api/cartola?url='
} else {
  baseURL = 'http://localhost:3000/api/cartola?url='
}

const api = create({
  baseURL,
  responseType: 'json',
  timeout: 10000,
})

api.interceptors.request.use(request => ({
  ...request,
  data: decamelizeKeys(request.data),
}))

api.interceptors.response.use(response => ({
  ...response,
  data: camelizeKeys(response.data),
}))

export default api
