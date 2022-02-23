import React,{ useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useSelector } from "react-redux";

import Header from './Header';
import Footer from './Footer';
import ProductViewModal from './ProductViewModal';

import Navigate from '../routes/Navigate';

import FetchProduct from '../fetchData/FetchProduct';
import FetchCategory from '../fetchData/FetchCategory';
import FetchUser from '../fetchData/FetchUser';
import FetchCart from '../fetchData/FetchCart';
import { useDispatch } from 'react-redux';

const Layout = () => { 
    
    const {fetchProducts, fetchImage} = FetchProduct();
    const {fetchCategories} = FetchCategory();
    const {fetchUsers, fetchUserId, fetchUser} = FetchUser();
    const {fetchCarts} = FetchCart();

    const dispatch = useDispatch();

    const name = window.localStorage.getItem("Name");
   
    const products = useSelector((state)=> state.allProducts.products);
    const UserId =useSelector((state)=> state.user.userid);

    useEffect(()=>{
        fetchCategories();
        dispatch(fetchProducts());
        
      },[]);

    useEffect(()=>{
        fetchImage(products);
    
    },[products]);

    //render user details and users data
    useEffect(() => {
        fetchUser();
        if(name !== null){
            fetchUserId(name);
        }
        if(name === "SuperUser"){
            fetchUsers();
        }    
    }, [name]);

    //render carts data
    useEffect(() => {
        if(UserId !== 0 ){
            console.log(UserId)
            fetchCarts(UserId);
        };
    }, [UserId]);

    return (
        <BrowserRouter>
            <div>
                <div className='container'>
                    <Header />
                    <div className='main'>
                        <Navigate />
                    </div>
                </div>
                <Footer />
                < ProductViewModal  />
            </div>
        </BrowserRouter>
    )
}

export default Layout
