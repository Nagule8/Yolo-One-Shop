import React from 'react';
import { useSelector } from "react-redux";

import ProductView from './ProductView';
import Button from './Button';

import { removeSelectedProduct } from '../redux/actions/productActions';
import { useDispatch } from 'react-redux';

const ProductViewModal = () => {
    
    const product = useSelector((state)=>state.modalProduct);

    const dispatch = useDispatch();

    return (
        <div className={`product-view__modal ${product.id === undefined ? '' : 'active'}`}>
            <div className="product-view__modal__content">
                    < ProductView product={product} />
                    <div className="product-view__modal__content__close">
                        <Button size='sm' onClick={() => dispatch(removeSelectedProduct())}>
                            close
                        </Button>
                    </div>
            </div>
        </div>
    );
};

export default ProductViewModal;
