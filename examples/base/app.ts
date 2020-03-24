import axios from '../../src/index';

/**
 * 模拟 get 请求
 */
axios({
  url: '/base/get',
  method: 'get',
  params: {
    foo: ['bar', 'baz']
  }
});

axios({
  url: '/base/get',
  method: 'get',
  params: {
    foo: {
      bar: 'baz'
    }
  }
});

const date = new Date();

axios({
  url: '/base/get',
  method: 'get',
  params: {
    date
  }
});

axios({
  url: '/base/get',
  method: 'get',
  params: {
    foo: '@:$, '
  }
});

axios({
  url: '/base/get',
  method: 'get',
  params: {
    foo: 'bar',
    baz: null
  }
});

axios({
  url: '/base/get#hash',
  method: 'get',
  params: {
    foo: 'bar'
  }
});

axios({
  url: '/base/get?foo=bar',
  method: 'get',
  params: {
    bar: 'baz'
  }
});

/**
 * 测试请求body数据
 */

axios({
  url: '/base/post',
  method: 'post',
  data: {
    a: 1,
    b: 2,
    c: 3
  }
});

const arr = new Int32Array([21,31]);

axios({
  url: '/base/buffer',
  method: 'post',
  data: arr
});

/**
 *  测试请求header
 */

axios({
  url: '/base/post',
  method: 'post',
  data: {
    a: 1,
    b: 2
  }
});

axios({
  url: '/base/post',
  method: 'post',
  headers: {
    'content-type': 'application/json',
    'Accept': 'application/json,text/plain, */*'
  },
  data: {
    a: 1,
    b: 2
  }
});

const paramsString = 'q=URLUtils.searchParams&topic=api';
const searchParams = new URLSearchParams(paramsString);
axios({
  url: '/base/post',
  method: 'post',
  data: searchParams
});

axios({
  url: '/base/post',
  method: 'post',
  data: {
    a: 1,
    b: 2
  }
}).then((res) => {
  console.log(res);
  // data: "{"a":1,"b":2}"
});

axios({
  url: '/base/post',
  method: 'post',
  responseType: 'json',
  data: {
    a: 3,
    b: 4
  }
}).then((res) => {
  console.log(res);
  // data: {a: 3, b: 4}
});
