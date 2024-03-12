import axios from 'axios';
import { message } from "antd";

const request = axios.create({
  baseURL: '/api',
  timeout: 10000,
})

request.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

request.interceptors.response.use(
  (response) => {
    if (response.data?.code && response.data?.code !== 200) {
      message.error(response.data?.msg);
      console.log(response.data)
      return Promise.reject(response);
    } else {
      return response;
    }
  },
  (error) => {
    // console.log(error)
    message.error(error.message);
    return Promise.reject(error);
  },
)

export default request;