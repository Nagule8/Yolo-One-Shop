import {combineReducers} from "redux";

import { ProductReducer, selectedProductReducer, modalSelectedProductReducer } from "./productReducer";
import { userReducer } from "./userReducer";
import { CategoryReducer,selectedCategoryReducer } from "./categoryReducer";
import { CartReducer } from "./cartReducer";
import { ImageReducer } from "./imageReducer";
//import {toastsReducer} from "./toastReducer";
import { UserActivityReducer } from "./userActivityReducer";


const reducers =combineReducers({
    allProducts:ProductReducer,
    product:selectedProductReducer,
    modalProduct:modalSelectedProductReducer,

    allCategories:CategoryReducer,
    category:selectedCategoryReducer,

    allCarts:CartReducer,
    
    user:userReducer,

    images:ImageReducer,

    userActivity: UserActivityReducer

    //toasts:toastsReducer
});

export default reducers;