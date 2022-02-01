import { ActionTypes } from "../constants/userActivityAction-Types";

const initialState = {
};

export const UserActivityReducer = (state = initialState, {type,payload})=>{
    switch(type){
        case ActionTypes.SET_USERaCTIVITIES:
            return {...state,userActivities:payload};
        case ActionTypes.SET_USERaCTIVITY:
            return {...state, userActivity:payload}
        default :
            return state;
    }
}