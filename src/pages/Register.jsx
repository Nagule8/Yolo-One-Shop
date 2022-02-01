import React from 'react';
import { Link } from 'react-router-dom';

import loginImg from '../assets/images/Register/login.svg';

import Button from '../components/Button';

const Register = () => {
  return (
    
    <div className="base-container" >
      <div className="title">Register</div>
      <div className="content">
        <div className="image">
          <img src={loginImg} />
        </div>
        <div className="form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" placeholder="username" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" placeholder="email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="text" name="password" placeholder="password" />
          </div>
        </div>
      </div>
      <div className='login'>
        Existing User,please 
        <Link to='/login' className='login__link'>
          Login
        </Link>
      </div>
      <div className="footer">
          <Button size='sm'>
              Register
          </Button>
      </div>
    </div>
  
  );
};

export default Register;
