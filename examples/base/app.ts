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
  method: 'get',
  url: '/base/get?foo=bar',
  params: {
    bar: 'baz'
  }
});
