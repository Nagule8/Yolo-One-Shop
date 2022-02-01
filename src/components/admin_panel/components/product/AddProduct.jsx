import React from 'react';
import { useSelector } from "react-redux";
import {Row, Col, Form} from "react-bootstrap";

import Button from '../../../Button';

import HandleProductSubmit from '../../../../fetchData/handleSubmit/handleProductSubmit';

const AddProduct = (props) => {
    const categories = useSelector((state)=> state.allCategories.categories);
    const {addProduct, uploadImage } = HandleProductSubmit();

    return (
        <div className='add-product'>
            <h2 className='add-product__title'>Add Product</h2>
            <form action="" className='add-product__form' onSubmit={addProduct}>
                <div className='add-product__form__input__line'>
                    <label htmlFor="name"><i class='bx bx-user-circle'></i> Name</label>
                    <input type="text" name='Name' id='Name' />
                </div>
                <div className='add-product__form__input__line'>
                    <label htmlFor="Description"><i class='bx bx-user-circle'></i> Description</label>
                    <input type="text" name='Description' id='Description' />
                </div>
                <div className='add-product__form__input__line'>
                    <label htmlFor="Price"><i class='bx bx-user-circle'></i> Price</label>
                    <input type="text" name='Price' id='Price' />
                </div>
                <div className='add-product__form__input__line'>
                    <label htmlFor="CategoryId"> CategoryId - 
                        {categories.map(ctg=><span>{`  ${ctg.id}:${ctg.name}`}</span>)}</label>
                    <select name="CategoryId" id="CategoryId">
                        {categories.map(ctg=>
                            <>
                                <option key={ctg.categoryId}>{ctg.id}</option>
                            </>
                        )}
                    </select>
                </div>

                <input onChange={uploadImage} type="File" />

                <Button size="sm" type="submit">
                        Add Product
                </Button>
            </form>
        </div>
    );
};

export default AddProduct;
