import axios, {AxiosError} from '../../src/index';
import 'nprogress/nprogress.css';
import NProgress from 'nprogress';
import qs from 'qs';

// document.cookie = 'a=b';
// axios.get('/more/get').then(res => {
//   console.log(res);
// });
//
// axios.post('http://127.0.0.1:8088/more/server2', {}, {
//   withCredentials: true,
// }).then(res => {
//   console.log(res);
// });

// xsrf鉴权
// const instance = axios.create({
//   xsrfCookieName: 'XSRF-TOKEN-D',
//   xsrfHeaderName: 'X-XSRF-TOKEN-D'
// });
//
// instance.get('/more/get').then(res => {
//   console.log(res)
// });


// 上传下载事件监听
// const instance = axios.create();
//
// // loaded已经加载，total总共 return 一个目前上传的百分比
// function calculatePercentage(loaded: number, total: number) {
//   return Math.floor(loaded * 1.0) / total
// }
//
// function loadProgressBar() {
//   const setupStartProgress = () => {
//     instance.interceptors.request.use(config => {
//       NProgress.start();
//       return config
//     })
//   };
//   const setupUpldateProgress = () => {
//     const update = (e: ProgressEvent) => {
//       console.log(e);
//       NProgress.set(calculatePercentage(e.loaded, e.total));
//     };
//     instance.defaults.onDownloadProgress = update;
//     instance.defaults.onUploadProgress = update;
//   };
//   const setuoStopProgress = () => {
//     instance.interceptors.response.use(response => {
//       NProgress.done();
//       return response
//     },error => {
//       NProgress.done();
//       return Promise.reject(error);
//     })
//   }
//
//   setupStartProgress();
//   setupUpldateProgress();
//   setuoStopProgress();
// }
// loadProgressBar();
//
// const downloadEle  = document.getElementById('download');
// downloadEle!.addEventListener('click', e => {
//   instance.get('https://img.mukewang.com/5cc01a7b0001a33718720632.jpg')
// });
//
// const uploadEle = document.getElementById('upload');
// uploadEle!.addEventListener('click', e => {
//   const data = new FormData();
//   const fileEle = document.getElementById('file') as HTMLInputElement
//   if (fileEle.files) {
//     data.append('file', fileEle.files[0]);
//     instance.post('/more/upload', data);
//   }
// });


// Authorization: BasicWWVlOjEyMzQ1Ng==
// axios.post('/more/post', {a: 1},{
//   auth: {
//     username: 'Yee',
//     // username: 'Yee1',
//     password: '123456'
//   }
// }).then(res => {
//   console.log(res);
// }).catch(e => {
//   console.warn('catch报错', e);
// });

// 自定义合法状态码
// axios.get('/more/304').then(res => {
//   console.log(res);
// }).catch((e: AxiosError) => {
//   console.log(e.message);
// });
//
// axios.get('/more/304', {
//   validateStatus(status) {
//     return status >= 200 && status< 400
//   }
// }).then(res => {
//   console.log(res);
// }).catch((e: AxiosError) => {
//   console.log(e.message);
// });


// 自定是处理传递数据格式
// axios.get('/more/get', {
//   params: new URLSearchParams('a=b&c=d')
// }).then(res => {
//   console.log(res);
// });
//
// axios.get('/more/get', {
//   params: {
//     a: 1,
//     b: 2,
//     c: ['a', 'b', 'c']
//   }
// }).then(res => {
//   console.log(res);
// });
//
//
// const instance = axios.create({
//   paramsSerializer(params) {
//     return qs.stringify(params, {arrayFormat: 'brackets'})
//   }
// });
//
// instance.get('/more/get', {
//   params: {
//     a: 1,
//     b: 2,
//     c: ['a', 'b', 'c']
//   }
// }).then(res => {
//   console.log(res);
// });

// 添加baseUR配置
const instance = axios.create({
  baseURl: 'https://img.mukewang.com'
});

instance.get('5cc01a7b0001a33718720632.jpg');
instance.get('https://img.mukewang.com/szimg/5becd5ad0001b89306000338-360-202.jpg');
