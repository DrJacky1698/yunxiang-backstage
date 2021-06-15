import request from '@/utils/request'

export function getListC(params) {
  return request({
    url: '/users',
    method: 'get',
    params
  })
}