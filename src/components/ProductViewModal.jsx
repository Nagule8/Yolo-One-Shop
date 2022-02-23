import React from 'react';
import { useSelector } from "react-redux";

import ProductView from './ProductView';
import Button from './Button';

import { removeModalSelectedProduct } from '../redux/actions/productActions';
import { useDispatch } from 'react-redux';

const ProductViewModal = () => {
    
    const product = useSelector((state)=>state.allProducts.modalProduct);

    const dispatch = useDispatch();

    return (
        <div className={`product-view__modal ${product.id === undefined ? '' : 'active'}`}>
            <div className="product-view__modal__content">
                    < ProductView product={product} />
                    <div className="product-view__modal__content__close">
                        <Button size='sm' onClick={() => dispatch(removeModalSelectedProduct())}>
                            close
                        </Button>
                    </div>
            </div>
        </div>
    );
};

export default ProductViewModal;
