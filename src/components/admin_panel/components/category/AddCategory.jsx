import React from 'react';

import Button from '../../../Button';

import HandleCategorySubmit from '../../../../fetchData/handleSubmit/handleCategorySubmit';

const AddCategory = () => {
    const {addCategory} = HandleCategorySubmit();

    return (
        <div className='add-category'>
            <h2 className='add-category__title'>Add Category</h2>
            <form action="" className='add-category__form' onSubmit={addCategory}>
                <div className='add-category__form__input__line'>
                    <label htmlFor="name"><i class='bx bx-user-circle'></i> Name</label>
                    <input type="text" name='Name' id='Name' />
                </div>
                <Button size="sm" type="submit">
                        Add Category
                </Button>
            </form>
        </div>
    );
};

export default AddCategory;
