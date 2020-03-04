import axios from 'axios';

export const BASE_URL = 'http://192.168.0.106:3000/api';

/*axios.interceptors.request.use( function (config) {
  config.headers['authorization'] = '6';
  return config;
}, function (error) {
  return Promise.reject( error );
} );*/

axios.interceptors.response.use(response => response, async error => {
  const { request: {status} } = error;
  switch (status) {
    case 401:
      const {data} = await axios.post(`${BASE_URL}/sign_in`, {});
      const {config} = error;
      config.headers.authorization = data;
      return axios.request(config);

    case 419:
      break;
    default: {
      return Promise.reject(error);
    }
  }
  return Promise.reject(error);
});


