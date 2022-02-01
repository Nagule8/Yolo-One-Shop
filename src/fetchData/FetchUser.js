import { useDispatch } from "react-redux";

import {getUserId} from "../redux/actions/userActions";
import { setUser, setUsers } from "../redux/actions/userActions";

import UserIdDataService from "../services/getuserid.service";

import Toastify from "../containers/ToastNotification/Toastify";
import RegisteruserService from "../services/registeruser.service";

const FetchUser = () => {
    const dispatch = useDispatch();
    const { notifyError } = Toastify();

    const fetchUsers = async () => {
        await RegisteruserService.getAll()
        .then((response)=>{
            dispatch(setUsers(response.data));
        })
        .catch((err) => {
            notifyError("Failed to fetch users.");
            //console.log("Error: ",err);
        });
    }

    const fetchUserId = async (username)=>{
        const user = (username);
        if(user){
            const response = await UserIdDataService.get((user))
            .catch((err) => {
                notifyError("Failed to get user id.");
                //console.log("Error: ",err);
            });
            dispatch(getUserId(response.data));
        }
    };

    const fetchUser = ()=>{
        const Name = window.localStorage.getItem("Name");
        const Password = window.localStorage.getItem("Password");
    
        dispatch(setUser({Name,Password}));
    };
    return {
        fetchUsers, fetchUserId, fetchUser
    }
};

export default FetchUser
