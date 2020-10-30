import axios from 'axios'

//包装实例
export function request(config) {
  //创建实例
  const instance = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 5000,
  })

  //请求拦截器
  instance.interceptors.request.use(config => {
    return config;
  }, err => {
    console.log(err);
  })

  //响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);
  })

  //发送请求
  return instance(config)
}
