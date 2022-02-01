import React from 'react';

const Delivery = () => {
    return (
        <div className='checkout__form__container'>
            <h2 className='checkout__form__container__title'><i class='bx bxs-user-detail'></i>Billing Address</h2>
            <form action="" className='checkout__form__container__form' >
                <div className='checkout__form__container__form__input__line'>
                    <label htmlFor="name"><i class='bx bx-user-circle'></i> Name</label>
                    <input type="text" name='name' id='name' />
                </div>
                <div className='checkout__form__container__form__input__line'>
                    <label htmlFor="email"><i class='bx bxl-gmail' ></i> Mail</label>
                    <input type="text" name='email' id='email' />
                </div>
                <div className='checkout__form__container__form__input__container'>
                    <div className='checkout__form__container__form__input__line   checkout__form__container__form__input__container__input__line'>
                        <label htmlFor="address"><i class='bx bx-door-open' ></i> Flat no</label>
                        <input type="text" name='address' id='address' />
                    </div>
                    <div className='checkout__form__container__form__input__line   checkout__form__container__form__input__container__input__line'>
                        <label htmlFor="city"><i class='bx bx-buildings' ></i> City</label>
                        <input type="text" name='state' id='email' />
                    </div>
                    <div className='checkout__form__container__form__input__line   checkout__form__container__form__input__container__input__line'>
                        <label htmlFor="state"><i class='bx bxs-business' ></i> State</label>
                        <input type="text" name='state' id='state' />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Delivery;
