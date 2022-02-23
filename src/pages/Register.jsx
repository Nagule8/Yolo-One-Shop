import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import loginImg from '../assets/images/Register/login.svg';

import Button from '../components/Button';

import RegisterUserDataService from '../services/registeruser.service';

import Toastify from '../containers/ToastNotification/Toastify';

const Register = () => {
  const {notifySuccess, notifyError} = Toastify();

  const [UserName, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ Role ] = useState("User");

  let navigate = useNavigate();

  const registerUser =async () =>{

    const data = {UserName, Email, Role, Password};

    await RegisterUserDataService.create(data)
    .then((res) =>{
        notifySuccess(`${UserName} registered in!.`);
        navigate("/login");
    })
    .catch((err)=>{
        notifyError("Error Registering User.");
        //console.log("Login Error:",err);
    });   

  }

  return (
    
    <div className="base-container" >
      <div className="title">Register</div>
      <div className="content">
        <div className="image">
          <img src={loginImg} alt='' />
        </div>
        <div className="form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" placeholder="username" onChange={ (e)=> setName(e.target.value) } />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" placeholder="email" onChange={ (e)=> setEmail(e.target.value) } />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="password" onChange={ (e)=> setPassword(e.target.value) } />
          </div>
        </div>
      </div>
      <div className='login'>
        Existing User,please 
        <Link to='/login' className='login__link'>
          Login
        </Link>
      </div>
      <div className="footer__btn">
          <Button size='sm' onClick={() => registerUser()}>
              Register
          </Button>
      </div>
    </div>
  
  );
};

export default Register;
