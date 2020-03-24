import axios, { AxiosError } from '../../src/index';

// url故意写错404
axios({
  url: '/error/get1',
  method: 'get',
}).then((res) => {
  console.log(res);
}).catch((e) => {
  console.log(e);
});

// 有一定几率是500错误
axios({
  url: '/error/get',
  method: 'get',
}).then((res) => {
  console.log(res);
}).catch((e) => {
  console.log(e);
});

// 延时5秒模拟网络错误,需要手动关闭network网络
setTimeout(() => {
  axios({
    url: '/error/get',
    method: 'get',
  }).then((res) => {
    console.log(res);
  }).catch((e) => {
    console.log(e);
  });
}, 5000);

// 模拟超时
axios({
  url: '/error/timeout',
  method: 'get',
  timeout: 2000
}).then((res) => {
  console.log(res);
}).catch((e: AxiosError) => {
  console.log(1,e.message);
  console.log(2,e.config);
  console.log(3,e.code);
  console.log(4,e.request);
  console.log(5,e.isAxiosError);
});
