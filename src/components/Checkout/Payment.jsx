import React from 'react';

const Payment = () => {
    return (
        <div className="checkout__form__container">
            <h2 className='checkout__form__container__title'>Payment details</h2>
            <form action="" className='checkout__form__container__form'>
                <div className='checkout__form__container__form__input__line'>
                    <label htmlFor="name"> Name on card </label>
                    <input type="text" name='name' id='name' placeholder='Your Name' />
                </div>
                <div className='checkout__form__container__form__input__line'>
                    <label htmlFor="card"> Card number </label>
                    <input type="text" name='card' id='card' placeholder='1111-2222-3333-4444' />
                </div>
                <div className="checkout__form__container__form__input__container">
                    <div className='checkout__form__container__form__input__line   checkout__form__container__form__input__container__input__line'>
                        <label htmlFor="date"> Expiring date </label>
                        <input type="text" name='date' id='date' placeholder='12-29' />
                    </div>
                    <div className='checkout__form__container__form__input__line   checkout__form__container__form__input__container__input__line'>
                        <label htmlFor="cvv"> CVV </label>
                        <input type="text" name='cvv' id='cvv' placeholder='***' />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Payment;
