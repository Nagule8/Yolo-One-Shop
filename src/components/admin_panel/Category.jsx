import React,{useEffect, useState} from "react";
import {useSelector } from "react-redux";
import { Link } from "react-router-dom";

import FetchCategory from '../../fetchData/FetchCategory';

import Button from '../../components/Button';

import EditCategory from './components/category/EditCategory';

//import HandleCategorySubmit from "../../fetchData/handleSubmit/handleCategorySubmit";

const Category = () => {
    const categories = useSelector((state)=> state.allCategories.categories);
    const {fetchCategories, deleteItem} = FetchCategory();

    const [SpecificCategory, setSpecificCategory] = useState("");

    // Modal open state
    const [editModal, setEditModal] = React.useState(false);

    const showFun = (item)=>{
        setSpecificCategory(item);
        setEditModal(!editModal);
    }

    useEffect(()=>{
        fetchCategories();
    },[fetchCategories]);

    return (
        <div className="category">
            {!editModal ? <><Link to='/panel/addcategory'>
                <Button size="sm">
                    <i class='bx bx-add-to-queue'></i> Add Category
                </Button>
            </Link>
            <table className="category__table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Slug</th>
                        <th>Edit/Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        categories.map((item, index) => (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.slug}</td>
                                <td>
                                    <Button size="sm" onClick={()=>{showFun(item)}}>
                                        Edit
                                    </Button>
                                    <Button size="sm" onClick={()=> deleteItem(item)}>
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table></> : null}
            {editModal ? 
            <>
                <EditCategory item={SpecificCategory} /> 
                <Button size="sm" onClick={() => setEditModal(!editModal)}>Back</Button>
            </>  : null}
        </div>
    );
};

export default Category;
