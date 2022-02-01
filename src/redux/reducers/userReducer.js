import { ActionTypes } from "../constants/userAction-Types";

const initialState = {
    userid: 0,
};

export const userReducer = (state = initialState, {type,payload})=>{
    switch(type){
        case ActionTypes.SET_USER:
            return {...state,...payload};
        case ActionTypes.CREATE_USER:
            return {...state,...payload};
        case ActionTypes.DELETE_USER:
            return {};
        case ActionTypes.GET_USER_ID:
            return {...state, userid:payload}
        case ActionTypes.SET_USERS:
            return {...state, users:payload}
        default :
            return state;
    }
}