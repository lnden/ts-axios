import axios  from '../../src/index';

axios({
  url: '/extend/post',
  method: 'post',
  data: {
    msg: 'hi'
  }
});

axios.request({
  url: '/extend/post',
  method: 'post',
  data: {
    msg: 'hello'
  }
});

axios.get('/extend/get');

axios.delete('/extend/delete');

axios.head('/extend/head');

axios.options('/extend/options');

axios.post('/extend/post', { msg: 'post'});

axios.put('/extend/put', { msg: 'put'});

axios.patch('/extend/patch', { msg: 'patch'});

// 函数重载实现
axios({
  url: '/extend/post',
  method: 'post',
  data: {
    msg: 'hi'
  }
});

axios('/extend/post', {
  method: 'post',
  data: {
    msg: 'hello'
  }
});


interface ResponseData<T=any> {
  code: number
  result: T,
  message: string
}

interface User {
  name: string
  age: number
}

function getUser<T>() {
  return axios<ResponseData<T>>('/extend/user')
    .then(res => res.data)
    .catch(err => console.log(err));
}

async function test() {
  console.log('准备发送请求');
  const user = await getUser<User>();
  if (user) {
    console.log(user.result.name);
  }
}
test();
