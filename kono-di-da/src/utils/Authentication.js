import axios from 'axios'

const auth = {
  register(user) {
    return axios
      .post('registerEndPoint', user)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  },
  signIn(user) {
    return axios
      .post('signInEndPoint', user)
      .then(res => {
        localStorage.setItem('userToken', res.data.token);
        console.log(res.data);
      })
  }
};

export default auth