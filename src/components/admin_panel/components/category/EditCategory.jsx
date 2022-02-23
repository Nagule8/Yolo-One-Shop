import React from 'react';

import Button from '../../../Button';

import HandleCategorySubmit from '../../../../fetchData/handleSubmit/handleCategorySubmit';

const EditCategory = (props) => {
    const {editCategory} = HandleCategorySubmit();    
    return (
        <div className="edit-category">
            <h2 className='edit-category__title'>Edit Category</h2>
            <form action="" className='edit-category__form' onSubmit={editCategory}>
                <div className='edit-category__form__input__line'>
                    <label htmlFor="Id"><i class='bx bx-user-circle'></i> Id</label>
                    <input type="text" name='Id' id='Id' placeholder={props.item.id} value={props.item.id} disabled />
                </div>
                <div className='edit-category__form__input__line'>
                    <label htmlFor="Name"><i class='bx bx-user-circle'></i> Name</label>
                    <input type="text" name='Name' id='Name' placeholder={props.item.name} />
                </div>
                <div className='edit-category__form__input__line'>
                    <label htmlFor="Slug"><i class='bx bx-user-circle'></i> Slug</label>
                    <input type="text" name='Slug' id='Slug' placeholder={props.item.slug} />
                </div>
                <div className='edit-category__form__input__line'>
                    <label htmlFor="Sorting"><i class='bx bx-user-circle'></i> Sorting</label>
                    <input type="text" name='Sorting' id='Sorting' placeholder={props.item.sorting} />
                </div>

                <Button size="sm" type="submit">
                        Edit Category
                </Button>
            </form>
        </div>
    );
};

export default EditCategory;
