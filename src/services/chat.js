import request from '../utils/request';
import api from './api'



export const ORIGIN_CREATIVE_LIST = `${api.origin}/creative_list`; //列表

export function getOriginList() {
  return request(ORIGIN_CREATIVE_LIST, {
    method: 'GET',
  })
}