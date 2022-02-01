import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';

import Payment from '../components/Checkout/Payment';
import Delivery from '../components/Checkout/Delivery';

import Toastify from '../containers/ToastNotification/Toastify';

const CheckOut = () => {
    const {notifySuccess} = Toastify();

    return (
        <div>
            <div className='checkout'>
            <Delivery />
            <Payment />
            </div>
            <Link className='checkout__confirm' to='/'>
                <Button size='sm' onClick={() => notifySuccess("Order Placed.")}>
                    Confirm    
                </Button>            
            </Link>
        </div>
    );
};

export default CheckOut;
