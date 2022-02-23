import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import CartDataService from "../services/cartitems.service";

import {setCartItems, deleteCartItems, updateQuantity} from "../redux/actions/cartActions";

import Toastify from "../containers/ToastNotification/Toastify";

const FetchCart = () => {
    const dispatch = useDispatch();
    //const navigate = useNavigate();

    const UserId =useSelector((state)=> state.user.userid);

    const {notifySuccess, notifyError, notifyWarning} = Toastify();

    const fetchCarts = async (userid)=>{
        await CartDataService.getAll(userid)
        .then((response)=>{
            dispatch(setCartItems(response.data));
        })
        .catch((err) => {
            notifyError(err);
        });
            
    };

    const UpdateQuantity = async (id,quantity) => {
        await CartDataService.update(id,quantity)
        .then((res)=>{
            dispatch(updateQuantity(res.data));
            notifySuccess("Quantity Updated.");
        })
        .catch((err)=>{
            notifyError("Failed to increase.");
        });

        //console.log(id,quantity);
    };

    const deleteCartItem = async (cartItem) =>{
        if(window.confirm("Are you sure?")){
            await CartDataService.delete(cartItem.id)
            .then((res)=>{
                notifyWarning(`${cartItem.itemName} deleted.`);
                dispatch(deleteCartItems(cartItem));
            })
            .catch((err)=>{
                notifyError(err);
            });
        }
    }

    const addToCart = async (data)=>{
        if(UserId === null){
            //navigate('/register');
        }

        await CartDataService.create(data)
        .then((res)=>{
            notifySuccess("Product added.");
        })
        .catch((err)=>{
            notifyError(err);
        });
    }

    return {
        fetchCarts, UpdateQuantity,
        deleteCartItem, addToCart
    }
}

export default FetchCart
