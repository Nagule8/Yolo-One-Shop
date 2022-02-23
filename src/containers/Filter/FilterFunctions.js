import { useDispatch, useSelector } from "react-redux";
import FetchProduct from '../../fetchData/FetchProduct';
import { filteredProducts, sortedProducts, searchedProducts } from '../../redux/actions/productActions';

const FilterFunctions = () => {
    const products = useSelector((state)=> state.allProducts.products);
    const {fetchProducts} = FetchProduct();
    const dispatch = useDispatch();

    const filterProducts = (event) => {
        const categoryId = event.target.name;
        
        if(!event.target.checked){ 
            fetchProducts();
        };
        dispatch(filteredProducts(categoryId));
    }

    const sortProducts = (event) => {
        const sortValue = event.target.name;

        if(sortValue === "Latest"){
            fetchProducts();
        }
        dispatch(sortedProducts(sortValue, products));
    }

    const searchProducts = (event) => {
        const searchValue = event.target.value;

        if(searchValue === ""){
            fetchProducts();
        }
        dispatch(searchedProducts(searchValue));
    }

    const clearFilter = () =>{
        var checked = false;
        fetchProducts();

        return {checked}

    }

    return {
        filterProducts, sortProducts,
        searchProducts, clearFilter,
    }
}

export default FilterFunctions
