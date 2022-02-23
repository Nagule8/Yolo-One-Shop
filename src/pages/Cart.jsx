import React, {useState} from 'react';
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';

import Helmet from '../components/Helmet';
import Button from '../components/Button';
import CartItem from '../components/CartItem';

import numberWithComma from '../utils/numberWithComma';

const Cart = () => {

    const cartProducts = useSelector((state)=> state.allCarts.carts);
    //const UserId =useSelector((state)=> state.user.userid);

    const [totalPrice, setTotalPrice] = useState(0);

    const totalCart = (cartProducts)=>{
        var tot = 0;  
        cartProducts.map(item=>
                tot = tot + item.total
        );

        setTotalPrice(tot);
    }

    React.useEffect(()=>{
        totalCart(cartProducts);
    },[cartProducts]);

    return (
        <Helmet title='Cart'>
            <div className='cart__title'>
                Cart Summary
            </div>
            <div className="cart">
                <div className="cart__info">
                    <div className="cart__info__txt">
                        <p>
                            You have {cartProducts.length} products in your shopping cart
                        </p>
                        <div className="cart__info__txt__price">
                            <span>Total</span>
                            <span>$ {numberWithComma(totalPrice)}</span>
                        </div>
                    </div>
                    <div className="cart__info__btn">
                        <Link to='/checkout'>
                            <Button size='block'>Order</Button>
                        </Link>
                        -
                        <Link to='/catalog'>
                            <Button size='block'>Continue shopping</Button>
                        </Link>
                    </div>
                </div>
                <div className="cart__list">
                    {
                        cartProducts.map((item, index) => (
                            <CartItem key ={index} item={item} />
                        ))
                    }
                </div>
            </div>

        </Helmet>
    )
}

export default Cart