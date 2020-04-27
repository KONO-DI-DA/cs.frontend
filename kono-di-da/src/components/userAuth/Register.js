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
    console.log('user', user);
  };

  return (
    <div className='register'>

    </div>
  );
};

export default Register;