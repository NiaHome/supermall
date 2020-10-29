import axios from 'axios'

//包装实例
export function request(config) {
  //创建实例
  const instance = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 5000
  })

  //请求拦截器
  instance.interceptors.request.use(config => {
    console.log('请求拦截config:');
    console.log(config);
    //1.比如config中的信息不符合要求
    // config.headers

    //2.比如页面显示图标

    //3.比如登录携带token

    return config;
  }, err => {
    console.log('请求拦截err:');
    console.log(err);
  })

  //响应拦截
  instance.interceptors.response.use(res => {
    console.log('响应拦截res:');
    console.log(res);
    return res.data
  }, err => {
    console.log('响应拦截err:');
    console.log(err);
  })


  //发送请求
  return instance(config)
}
