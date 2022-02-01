import React from 'react';
import { useSelector } from 'react-redux';

import Button from '../../../Button';

import HandleProductSubmit from '../../../../fetchData/handleSubmit/handleProductSubmit';

const EditProduct = (props) => {

    const categories = useSelector((state)=> state.allCategories.categories);
    const {editProduct, uploadImage } = HandleProductSubmit();

    return (
        <div className="edit-product">
            <h2 className='edit-product__title'>Edit Category</h2>
            <form action="" className='edit-product__form' onSubmit={editProduct}>
                <div className='edit-product__form__input__line'>
                    <label htmlFor="Id"><i class='bx bx-user-circle'></i> Id</label>
                    <input type="text" name='Id' id='Id' placeholder={props.item.id} value={props.item.id} disabled />
                </div>
                <div className='edit-product__form__input__line'>
                    <label htmlFor="Name"><i class='bx bx-user-circle'></i> Name</label>
                    <input type="text" name='Name' id='Name' placeholder={props.item.name} />
                </div>
                <div className='edit-product__form__input__line'>
                    <label htmlFor="Description"><i class='bx bx-user-circle'></i> Description</label>
                    <input type="text" name='Description' id='Description' placeholder={props.item.description} />
                </div>
                <div className='edit-product__form__input__line'>
                    <label htmlFor="Price"><i class='bx bx-user-circle'></i> Sorting</label>
                    <input type="text" name='Price' id='Price' placeholder={props.item.price} />
                </div>
                <div className='edit-product__form__input__line'>
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
                        Edit Category
                </Button>
            </form>
        </div>
  
    );
};

export default EditProduct;
