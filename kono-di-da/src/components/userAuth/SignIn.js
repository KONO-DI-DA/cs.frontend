import React, {useState} from 'react';
import auth from "../../utils/Authentication";

const SignIn = () => {
  const [user, setUser] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    const updatedUser = {...user, [e.target.name]: e.target.value};
    console.log
    ('handle change', e.target.name, e.target.value,
      'updated user', updatedUser
    );
    setUser(updatedUser);
    // console.log('user', user);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    auth.signIn(user);
    console.log(user)
  };

  return (
    <div>
      <h1>Sign In</h1>
      <form className='log-in-form' onSubmit={handleSubmit}>
        <input
          type='text'
          name='username'
          placeholder='Please enter your username'
          value={user.username}
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

export default SignIn;