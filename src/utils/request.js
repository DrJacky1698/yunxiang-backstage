import axios from 'axios'
import {
  MessageBox,
  Message
} from 'element-ui'
import store from '@/store'
import {
  getToken
} from '@/utils/auth'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 50000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent

    if (store.getters.token) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      config.headers['Authorization'] = `Bearer ${getToken()}`
      config.headers.Accept = 'application/json'
    }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   * 
   * ref: [ https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status ]
   *  100 Continue
   *  101 Switching Protocol
   *  103 Early Hints
   *  200 OK
   *  201 Created
   *  202 Accepted
   *  203 Non-Authoritative Information
   *  204 No Content
   *  205 Reset Content
   *  206 Partial Content
   *  300 Multiple Choices
   *  301 Moved Permanently
   *  302 Found
   *  303 See Other
   *  304 Not Modified
   *  307 Temporary Redirect
   *  308 Permanent Redirect
   *  400 Bad Request
   *  401 Unauthorized
   *  402 Payment Required
   *  403 Forbidden
   *  404 Not Found
   *  405 Method Not Allowed
   *  406 Not Acceptable
   *  407 Proxy Authentication Required
   *  408 Request Timeout
   *  409 Conflict
   *  410 Gone
   *  411 Length Required
   *  412 Precondition Failed
   *  413 Payload Too Large
   *  414 URI Too Long
   *  415 Unsupported Media Type
   *  416 Range Not Satisfiable
   *  417 Expectation Failed
   *  418 I'm a teapot
   *  422 Unprocessable Entity
   *  425 Too Early
   *  426 Upgrade Required
   *  428 Precondition Required
   *  429 Too Many Requests
   *  431 Request Header Fields Too Large
   *  451 Unavailable For Legal Reasons
   *  500 Internal Server Error
   *  501 Not Implemented
   *  502 Bad Gateway
   *  503 Service Unavailable
   *  504 Gateway Timeout
   *  505 HTTP Version Not Supported
   *  506 Variant Also Negotiates
   *  507 Insufficient Storage
   *  508 Loop Detected
   *  510 Not Extended
   *  511 Network Authentication Required
   */
  response => {
    const res = response.data

    // if the status code is not 200, it is judged as an error.
    if (![200, 201].includes(response.status)) {
      let message = res.message || 'Request does not complated. status: ' + response.status
      let type = 'error'

      if (response.status === 400) {
        message = "請求不合法: " + response.data.msg
      }

      if (response.status === 404) {
        message = "资源未找到: " + response.data.msg
      }

      Message({
        message: message,
        type: type,
        duration: 5 * 1000
      })



      // 422: Illegal token (Signature verification failed); 402 no token; 50012: Other clients logged in; 50014: Token expired;
      if (res.status === 422 || response.status === 401 || res.code === 50014) {
        // to re-login
        MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
          confirmButtonText: 'Re-Login',
          cancelButtonText: 'Cancel',
          type: 'warning'
        }).then(() => {
          store.dispatch('user/resetToken').then(() => {
            location.reload()
          })
        })
      }
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service