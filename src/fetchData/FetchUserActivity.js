import { useDispatch } from 'react-redux';
import Toastify from "../containers/ToastNotification/Toastify";

import UseractivitiesService from '../services/useractivities.service';
import { setUserActivities, setUserActivity } from '../redux/actions/userActivityActions';

const FetchUserActivity = () => {

    const dispatch = useDispatch();
    const {notifyError} = Toastify();

    const fetchUserActivities = async ()=>{
        await UseractivitiesService.getAll()
        .then((res)=>{
                dispatch(setUserActivities(res.data));
        })
        .catch((err) => {
            notifyError("Failed to get user activities.");
            //console.log("Error: ",err);
        });
        
    };

    const fetchUserActivity = async (id)=>{
        await UseractivitiesService.get(id)
        .then((res)=>{
                dispatch(setUserActivity(res.data));
        })
        .catch((err) => {
            notifyError("Failed to get specific activity. ");
            //console.log("Error: ",err);
        });
        
    };

    return {
        fetchUserActivities,
        fetchUserActivity
    };
};

export default FetchUserActivity;
