import axios from 'axios'
import './axiosWithAuth'
import {axiosWithAuth} from "./axiosWithAuth";

const auth = {
  register(user) {
    axiosWithAuth()
      .post('registerEndPoint', user)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  },
  signIn(user) {
    axiosWithAuth()
      .post('signInEndPoint', user)
      .then(res => {
        localStorage.setItem('userToken', res.data.token);
        console.log(res.data);
      })
  }
};

export default auth