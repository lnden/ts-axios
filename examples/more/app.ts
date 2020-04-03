import axios from '../../src/index';
import 'nprogress/nprogress.css';
import NProgress from 'nprogress';

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

const instance = axios.create();

// loaded已经加载，total总共 return 一个目前上传的百分比
function calculatePercentage(loaded: number, total: number) {
  return Math.floor(loaded * 1.0) / total
}

function loadProgressBar() {
  const setupStartProgress = () => {
    instance.interceptors.request.use(config => {
      NProgress.start();
      return config
    })
  };
  const setupUpldateProgress = () => {
    const update = (e: ProgressEvent) => {
      console.log(e);
      NProgress.set(calculatePercentage(e.loaded, e.total));
    };
    instance.defaults.onDownloadProgress = update;
    instance.defaults.onUploadProgress = update;
  };
  const setuoStopProgress = () => {
    instance.interceptors.response.use(response => {
      NProgress.done();
      return response
    },error => {
      NProgress.done();
      return Promise.reject(error);
    })
  }

  setupStartProgress();
  setupUpldateProgress();
  setuoStopProgress();
}
loadProgressBar();

const downloadEle  = document.getElementById('download');
downloadEle!.addEventListener('click', e => {
  instance.get('https://img.mukewang.com/5cc01a7b0001a33718720632.jpg')
});

const uploadEle = document.getElementById('upload');
uploadEle!.addEventListener('click', e => {
  const data = new FormData();
  const fileEle = document.getElementById('file') as HTMLInputElement
  if (fileEle.files) {
    data.append('file', fileEle.files[0]);
    instance.post('/more/upload', data);
  }
});
