import { create } from 'axios'
import { decamelizeKeys, camelizeKeys } from 'humps'

const loginApi = create({
  baseURL: 'http://localhost:3000/api/login-globo?url=',
  responseType: 'json',
  timeout: 10000,
})

loginApi.interceptors.request.use(request => ({
  ...request,
  data: decamelizeKeys(request.data),
}))

loginApi.interceptors.response.use(response => ({
  ...response,
  data: camelizeKeys(response.data),
}))

export default loginApi
