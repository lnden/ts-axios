import axios  from '../../src/index';

/**
 * request 请求拦截器是 后添加的先执行
 * response 响应拦截器是 先添加的先执行
 */
// 请求拦截器
axios.interceptors.request.use(config => {
  config.headers.test += '1';
  return config
});
axios.interceptors.request.use(config => {
  config.headers.test += '2';
  return config
});
axios.interceptors.request.use(config => {
  config.headers.test += '3';
  return config
});

// 添加响应拦截器
axios.interceptors.response.use(res => {
  res.data += '1';
  return res
});

let interceptor = axios.interceptors.response.use(res => {
  res.data += '2';
  return res
});

axios.interceptors.response.use(res => {
  res.data += '3';
  return res
});

// 删掉第二个响应拦截器
axios.interceptors.response.eject(interceptor);

axios({
  url: '/interceptor/get',
  headers: {
    test: ''
  }
}).then((res) => {
  console.log(res.data);
});

