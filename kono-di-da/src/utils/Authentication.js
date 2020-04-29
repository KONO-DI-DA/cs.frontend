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
        console.log(res.data.token);
        localStorage.setItem('userToken', res.data.token);
      })
  },
  logOut() {
    axiosWithAuth()
      .post('https://kono-di-da.herokuapp.com/api/auth/logout')
      .then(res => {
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }
};

export default auth