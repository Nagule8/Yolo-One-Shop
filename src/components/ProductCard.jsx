import React,{useState, useEffect} from "react";
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';

import Button from './Button';

import numberWithComma from '../utils/numberWithComma';

import { modalSelectedProduct } from "../redux/actions/productActions";


const ProductCard = props => {

    const products = useSelector((state)=> state.allProducts.products);
    const images = useSelector(state => state.images.images);
    const [Image, setImage] = useState("");

    const dispatch = useDispatch();

    const modalProduct = (id) => {
        products.map((item, index) => {
            if(item.id == id) {
                dispatch(modalSelectedProduct(item));
            }
        })
    }

    const getImage = ()=>{ 
        images.map((image)=>{      
          if(image.imagename === (props.imageName)){
            setImage(image.image);
          }
        })
      }

      useEffect(() => {
        getImage();
      },[images]);

    return (
        <div className='product-card'>
            <Link to={`/catalog/${props.id}`}>
                <div className="product-card__image">
                    <img src={`data:image/jpeg;base64,${Image}`} alt="" />
                    <img src={`data:image/jpeg;base64,${Image}`} alt="" />
                </div>
                <h3 className='product-card__name'>{props.name}</h3>
                <div className="product-card__price">
                    $ {numberWithComma(props.price)}
                    <span className='product-card__price__old'>
                        <del>{numberWithComma(399000)}</del>
                    </span>
                </div>
            </Link>
            <div className="product-card__btn">
                <Button
                    size='sm'
                    icon='bx bx-cart'
                    animate={true}
                    onClick={() => modalProduct(props.id)}
                >
                    choose to buy
                </Button>
            </div>
        </div>
    )
}

ProductCard.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    categoryId: PropTypes.number.isRequired,
    imageName: PropTypes.string.isRequired

}

export default ProductCard
