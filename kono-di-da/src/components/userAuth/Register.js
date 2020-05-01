import React, {useState} from 'react';
import { useHistory } from 'react-router-dom'
import auth from '../../utils/Authentication'

const Register = (props) => {
  const history = useHistory();

  const [user, setUser] = useState({
    username: '',
    email: '',
    password: ''
  });

  const [player, setPlayer] = useState({
    name: '',
    room_id: 1,
    item_id: 0
  });

  const handleChange = (e) => {
    const updatedUser = {...user, [e.target.name]: e.target.value};
    setUser(updatedUser);
    setPlayer({...player, 'name': user.username});
    // console.log('user', user);
    // console.log('player', player)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    auth.register(user, player)
      .then(() => 
        history.push('/play')
      )
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