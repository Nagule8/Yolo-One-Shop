import React,{useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import FetchCart from '../fetchData/FetchCart';
import numberWithComma from '../utils/numberWithComma';


const CartItem = (props) => {

    const [item, setItem] = useState(props.item);
    const [Image, setImage] = useState("");

    const images = useSelector(state => state.images.images);

    const { UpdateQuantity, deleteCartItem } = FetchCart();

    const updateQuantity = (opt) => {
        if(opt === '-'){ 
            UpdateQuantity(item.id, item.quantity - 1 === 0 ? 1 : item.quantity - 1);
         }
        if(opt === '+') {
            UpdateQuantity(item.id, item.quantity + 1);
        }
    }

    useEffect(() => {
        setItem(props.item);
        const getImage = (images)=>{ 
            images.forEach((image)=>{      
                if(image.imagename === (item.imageName)){
                setImage(image.image);
                }
            });
        }

        getImage(images);
    
    }, [ props.item, images, item.imageName ]);
    
    
    return (
        <div className="cart__item">
            <div className="cart__item__image">
                <img src={`data:image/jpeg;base64,${Image}`} alt="" />
            </div>
            <div className="cart__item__info">
                <div className="cart__item__info__name">
                    <Link to={`/catalog/${item.itemId}`}>
                        {`${item.itemName}`}
                    </Link>
                </div>
                <div className="cart__item__info__price">
                    $ {numberWithComma(item.price)}
                </div>
                <div className="cart__item__info__quantity">
                    <div className="product__info__item__quantity">
                        <div className="product__info__item__quantity__btn" onClick={() => updateQuantity('-')} >
                            <i className='bx bx-minus'></i>
                        </div>
                        <div className="product__info__item__quantity__input" >
                            {item.quantity}
                        </div>
                        <div className="product__info__item__quantity__btn" onClick={() => updateQuantity('+')} >
                            <i className='bx bx-plus'></i>
                        </div>
                    </div>
                </div>
                <div className="cart__item__info__del">
                    <i className='bx bx-trash' onClick={() => {deleteCartItem(item)}}></i>
                </div>
            </div>
        </div>
    );
};

CartItem.propTypes = {
    item: PropTypes.object
};

export default CartItem;
