import { ActionTypes } from "../constants/cartAction-Types";

const iniCartState = {
    carts:[],
};

export const CartReducer = (state = iniCartState,{type,payload})=>{
    switch(type){
        case ActionTypes.SET_CARTS:
            return {...state,carts:payload};
        case ActionTypes.CREATE_CART:
            return {
                ...state,
                carts:[...state.carts,payload]
            };
        case ActionTypes.DELETE_CART:
            return {
                carts:[
                    ...state.carts.filter((cart) => cart.id !== payload.id)
                ]
            };
        case ActionTypes.UPDATE_QUANTITY:
            const indexU = state.carts.findIndex(cart => cart.id === payload.id);
            state.carts[indexU].quantity = payload.quantity;
            return {
                carts: [...state.carts]
            }
        default :
            return state;
    }
}