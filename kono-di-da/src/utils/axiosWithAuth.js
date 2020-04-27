import axios from 'axios';

const axiosWithAuth = {
  get(url) {
    return axios.get(url, { headers: { authorization: localStorage.getItem('userToken') }});
  },
  post(url, data) {
    return axios.post(url, data, { headers: { authorization: localStorage.getItem('userToken') }});
  },
  put(url, data) {
    return axios.put(url, data, { headers: { authorization: localStorage.getItem('userToken') } });
  },
  delete(url) {
    return axios.delete(url, { headers: { authorization: localStorage.getItem('userToken') }});
  }
};

export default axiosWithAuth;