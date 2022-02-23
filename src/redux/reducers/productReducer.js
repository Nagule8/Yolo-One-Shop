import { ActionTypes } from "../constants/productAction-Types";

const initialState = {
    products:[ ],
    product:{},
    modalProduct:{}
};

export const ProductReducer = (state = initialState,{type,payload})=>{
    switch(type){
        case ActionTypes.SET_PRODUCTS:
            return {...state, products:payload};
        case ActionTypes.CREATE_PRODUCT:
            return {
                ...state,
                products:[...state.products, payload]
            };
        case ActionTypes.DELETE_PRODUCT:
            return {
                products:[
                    ...state.products.filter((product) => product.id!==payload.id)
                ]
            };
        case ActionTypes.SELECTED_PRODUCT:
            return { 
                ...state, product: payload
            };
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {
                ...state, product: {}
            };
        
        case ActionTypes.MODAL_PRODUCT:
            return {
                ...state, modalProduct: payload
            };
        case ActionTypes.REMOVE_MODAL_SELECTED_PRODUCT:
            return {
                ...state, modalProduct: {}
            };
        
        case ActionTypes.FILTER_PRODUCTS:
            if(payload === ""){  
                return{...state};
             }

             return{
                ...state,
                products:[...state.products.filter((product) => product.categoryId === parseInt(payload))]
            }
        case ActionTypes.SEARCH_PRODUCTS:
            return {
                ...state,
                products:[
                    ...state.products.filter((product) => {
                        if(product.name.toLowerCase().includes(payload.toLowerCase()))
                            return product;
                    })
                ]
            }
        case "Highest":
            console.log(payload);
            return{
                ...state,
                products:[...state.products.sort((a, b)=> a.price <  b.price ? 1: -1)]
            }
        case "Lowest":
            return{
                ...state,
                products: [...state.products.sort((a, b)=> a.price >  b.price ? 1: -1)]
            }
        case "Alphabetic":
            return{
                ...state,
                products: [...state.products.sort((a, b)=> a.slug >  b.slug ? 1: -1)]
            }
        default :
            return state;
    }
}

export const modalSelectedProductReducer = (state= initialState, {type, payload}) => {
    switch(type) {
        case ActionTypes.MODAL_PRODUCT:
            return {modalProduct: [payload]};
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {}; 
        default:
            return state;
    }
}

export const editProductReducer = (state={},{type, payload})=>{
    switch(type){
        case ActionTypes.EDIT_PRODUCT:
            return {...state, ...payload};
        default:
            return state;
    }
}
