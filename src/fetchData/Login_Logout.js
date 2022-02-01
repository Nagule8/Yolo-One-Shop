import { useDispatch } from 'react-redux';

import RegisterUserDataService from '../services/registeruser.service';
import Toastify from "../containers/ToastNotification/Toastify";

import { deleteUser } from '../redux/actions/userActions';


const Login_Logout = () => {
    const { notifySuccess, notifyError } = Toastify();

    const dispatch = useDispatch();

    const logout = async ()=>{
        const res = await RegisterUserDataService.logout()
        .then(()=>{
            dispatch(deleteUser());
            notifySuccess("Successfully logged out.");
        })
        .catch(()=>{
            notifyError("Failed to Logout user");
        })

        //console.log(res.data);
    };

    return{
         logout
    }
}

export default Login_Logout;