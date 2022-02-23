import React from 'react';
import { Route, Routes } from 'react-router-dom';

import NotFound from '../components/NotFound';

import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import Cart from '../pages/Cart';
import Product from '../pages/Product';
import Login from '../pages/Login';
import Register from '../pages/Register';
import CheckOut from '../pages/CheckOut';
import Admin from '../pages/Admin';

import About from '../components/About';

import Category from '../components/admin_panel/Category';
import AdminProduct from '../components/admin_panel/Product';

import AddCategory from '../components/admin_panel/components/category/AddCategory';
import EditCategory from '../components/admin_panel/components/category/EditCategory';
import AddProduct from '../components/admin_panel/components/product/AddProduct';
import EditProduct from '../components/admin_panel/components/product/EditProduct';

import UserProfiles from '../components/superUser_panel/UserProfiles';
import UserActivities from '../components/superUser_panel/UserActivities';


const Navigate = () => {
    const name = window.localStorage.getItem("Name");

    return (
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/catalog/:id' element={<Product/>} />
            <Route path='/catalog' element={<Catalog/>} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/checkout' element={<CheckOut/>} />
            <Route path='/about' element={<About />} />
            {
                name === "Admin" || "SuperUser"  ? <Route path='/panel' element={<Admin/>}>
                    <Route index element={<Admin />} />
                    <Route path='/panel/category' element={<Category/>} />
                    <Route path='/panel/product' element={<AdminProduct/>} />

                    <Route path='/panel/addcategory' element={<AddCategory />} />
                    <Route path='/panel/editcategory' element={<EditCategory />} />

                    <Route path='/panel/addproduct' element={<AddProduct />} />
                    <Route path='/panel/editproduct' element={<EditProduct />} />

                    {
                        name === "SuperUser" ? <Route path='/panel/users' element={<UserProfiles />} /> : null
                    }
                    
                    {
                        name === "SuperUser" ? <Route path='/panel/user__activities' element={<UserActivities />} /> : null
                    }
                </Route> : null
            }
            <Route path="*" element={<NotFound />} />
        </Routes>
        
    )
}

export default Navigate
