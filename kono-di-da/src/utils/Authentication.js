import axios from 'axios'
import './axiosWithAuth'
import {axiosWithAuth} from "./axiosWithAuth";

const auth = {
  register(user) {
    axiosWithAuth()
      .post('https://kono-di-da.herokuapp.com/api/auth/register', user)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  },
  signIn(user) {
    axiosWithAuth()
      .post('https://kono-di-da.herokuapp.com/api/auth/login', user)
      .then(res => {
        localStorage.setItem('userToken', res.data.token);
        console.log(res.data);
      })
  }
};

export default auth