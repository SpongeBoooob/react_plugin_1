import request from '../utils/request';
import api from './api'


const LOGIN = `${api.user}/login`;

//登录
export function loginUser(data) {
  return request(LOGIN, {
    method: 'POST',
    data
  })
}