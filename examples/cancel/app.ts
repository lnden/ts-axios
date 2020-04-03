import axios, { Canceler } from '../../src/index';

const CancelToken = axios.CancelToken;
const source = CancelToken.souce();

axios.get('/cancel/get', {
  cancelToken: source.token
}).catch(e => {
  if (axios.isCancel(e)) {
    console.log('request canceled', e.message);
  }
});

setTimeout(() => {
  source.cancel('Operation canceled by the user');
  setTimeout(() => {
    axios.post('/cancel/post', { a: 1 }, {
      cancelToken:source.token }).catch(e => {
      if (axios.isCancel(e)) {
        console.log(e.message);
      }
    })
  }, 100)
}, 100);


// 第二种方式取消
let cancel: Canceler;
axios.get('/cancel/get',{
  cancelToken: new CancelToken(c => {
    cancel = c;
  })
}).catch(e => {
  if (axios.isCancel(e)) {
    console.log('request canceled')
  }
});

setTimeout(() => {
  cancel()
}, 500);
