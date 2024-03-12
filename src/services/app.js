import request from '../utils/request';
import api from './api'



const GET_APP_LIST = `${api.app}/list/list`; // 获取应用列表

export function getAppList() {
  return request(GET_APP_LIST, {
    method: 'GET',
  })
}