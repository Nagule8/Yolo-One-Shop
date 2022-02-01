import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useSelector } from "react-redux";

import Header from './Header';
import Footer from './Footer';
import ProductViewModal from './ProductViewModal';

import Navigate from '../routes/Navigate';

import FetchProduct from '../fetchData/FetchProduct';
import FetchCategory from '../fetchData/FetchCategory';
import FetchCart from '../fetchData/FetchCart';

const Layout = () => { 
    
    const {fetchProducts, fetchImage} = FetchProduct();
    const {fetchCategories} = FetchCategory();
   
    const products = useSelector((state)=> state.allProducts.products);

    React.useEffect(()=>{
        fetchProducts();
        fetchImage(products);
        fetchCategories();
        
      },[products.length]);

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
