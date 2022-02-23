import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import loginImg from '../assets/images/Register/login.svg';

import Button from '../components/Button';

import { setUser } from '../redux/actions/userActions';
import RegisterUserDataService from '../services/registeruser.service';

import Toastify from '../containers/ToastNotification/Toastify';

const Login = () => {
    const {notifySuccess, notifyError} = Toastify();

    const [Name, setName] = useState("");
    const [Password, setPassword] = useState("");

    let navigate = useNavigate();
    const dispatch = useDispatch();

    const login= async ()=>{
        window.localStorage.setItem("Name",Name);
        const data = {Name,Password};

        await RegisterUserDataService.login(data)
        .then((res) =>{
            notifySuccess("Logged in!.")
            dispatch(setUser(data));
            //console.log(res);
        })
        .catch((err)=>{
            notifyError("Error logging in.");
            //console.log("Login Error:",err);
        });   

        navigate("/");
    };

    return (

        <div className="base-container" >
            <div className="title">Login</div>
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
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder="password" 
                           onChange={(e)=> setPassword(e.target.value)} 
                           onPaste={(e)=>{
                                e.preventDefault()
                                return false;
                            }} 
                            onCopy={(e)=>{
                                e.preventDefault()
                                return false;
                            }}
                    />
                </div>
                </div>
            </div>
            <div className='login'>
                New User,please 
                <Link to='/register' className='login__link'>
                    Register
                </Link>
            </div>
            <div className="footer__btn">
                <Button size='sm' onClick={login}>
                    Login
                </Button>
            </div>
        </div>
    
    );
};

export default Login;
