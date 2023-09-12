const axios = require('axios');


axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response.data;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

module.exports = axios;