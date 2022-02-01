import React,{ useState} from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import FetchProduct from '../../fetchData/FetchProduct';

import Button from '../../components/Button';

import EditProduct from "./components/product/EditProduct";

const AdminProduct = () => {
    const products = useSelector((state)=> state.allProducts.products);

    // Modal open state
    const [editModal, setEditModal] = React.useState(false);

    const {deleteItem} = FetchProduct();
    const [SpecificItem, setSpecificItem] = useState("");
    
    const showFun = (item)=>{
        setSpecificItem(item);
        setEditModal(!editModal);
    }

    return (
        <div className="category">
            { !editModal ? 
            <>
                <Link to='/panel/addproduct'>
                    <Button size="sm">
                        <i class='bx bx-add-to-queue'></i> Add Product
                    </Button>
                </Link>
                <table className="category__table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Image name</th>
                            <th>Edit/Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.description}</td>
                                    <td>{item.price}</td>
                                    <td>{item.imageName}</td>
                                    <td>
                                        <Button size="sm" onClick={() => showFun(item)}>
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
                </table>
            </> : null
            }
            {
                editModal ? 
                <>
                    <EditProduct item={SpecificItem} /> 
                    <Button size="sm" onClick={() => setEditModal(!editModal)}>Back</Button>
                </> : null
            }
        </div>
    );
};

export default AdminProduct;
