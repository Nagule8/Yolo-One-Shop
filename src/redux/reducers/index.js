import {combineReducers} from "redux";

import { ProductReducer } from "./productReducer";
import { userReducer } from "./userReducer";
import { CategoryReducer } from "./categoryReducer";
import { CartReducer } from "./cartReducer";
import { ImageReducer } from "./imageReducer";
//import {toastsReducer} from "./toastReducer";
import { UserActivityReducer } from "./userActivityReducer";


const reducers = combineReducers({
    allProducts:ProductReducer,

    allCategories:CategoryReducer,

    allCarts:CartReducer,
    
    user:userReducer,

    images:ImageReducer,

    userActivity: UserActivityReducer

    //toasts:toastsReducer
});

export default reducers;