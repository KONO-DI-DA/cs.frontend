import React, {useState} from 'react';
import auth from '../../utils/Authentication'

const Register = () => {
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
    // consolelog('user', user);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    auth.register(user);
    console.log(user)
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