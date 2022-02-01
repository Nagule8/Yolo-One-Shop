import { ActionTypes } from "../constants/userActivityAction-Types";

export const setUserActivities = (users) => {
    return {
        type: ActionTypes.SET_USERaCTIVITIES,
        payload: users
    }
}

export const setUserActivity = (user) =>{

    return{
        type: ActionTypes.SET_USERaCTIVITY,
        payload: user,

    };
};