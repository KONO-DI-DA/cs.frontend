import React, {useState} from 'react';
import axios from 'axios'
import auth from '../../utils/Authentication'

const Register = (props) => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const updatedUser = {...user, [e.target.name]: e.target.value};
    setUser(updatedUser);
    // console.log('user', user);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    auth.register(user);
    console.log(user)
    props.history.push('/sign-in')
  };

  return (
    <div className='register'>
      <h1>Register</h1>
      <form className='register-form' onSubmit={handleSubmit}>
        <input
          type='text'
          name='username'
          placeholder='Please enter a username'
          value={user.username}
          onChange={handleChange}
        />
        <input
          type='email'
          name='email'
          placeholder='Please enter your email address'
          value={user.email}
          onChange={handleChange}
        />
        <input
          type='password'
          name='password'
          placeholder='Please enter a password'
          value={user.password}
          onChange={handleChange}
        />
        <button className='register-submit'>Submit</button>
      </form>
    </div>
  );
};

export default Register;