import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import Button from './Button';

import numberWithComma from '../utils/numberWithComma';

import FetchProduct from "../fetchData/FetchProduct";

import { removeSelectedProduct } from '../redux/actions/productActions';

const ProductView = (props) => {

    let product = props.product;
    const images = useSelector(state => state.images.images);

    const { handleSubmit } = FetchProduct();

    const dispatch = useDispatch();


    if( product.id === undefined ){ product = {
        id:0,
        name: '',
        slug: '',
        description: '',
        imageName: '',
        price: 0,
        categoryId: 0
    } }

    const [Image, setImage] = useState("");
    const [previewImg, setPreviewImg] = useState("");
    const [descriptionExpand, setDescriptionExpand] = useState(false);

    const [color, setColor] = useState(undefined);
    const [size, setSize] = useState(undefined);
    //const [quantity, setQuantity] = useState(1);

    const colors = [
        "white", "red", "orange"
    ];
    const sizes = [
        "S", "M", "L", "XL", "XXL"
    ]

    

    /*const updateQuantity = (type) => {
        if (type === 'plus'){
            setQuantity(quantity + 1);
        }
        else{
            setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
        }
    }*/

    useEffect(() => {

        const getImage = (images)=>{ 
            images.forEach((image)=>{      
                if(image.imagename === (product.imageName)){
                setImage(image.image);
                }
            });
        }
        
        getImage(images);

        return setPreviewImg("");
    },[images, product]);

  return (
    <div className='product'>
        <div className="product__images">
            <div className="product__images__list">
                <div className="product__images__list__item">
                    <img src={`data:image/jpeg;base64,${Image}`} alt="" onClick={() => setPreviewImg(Image)} />
                </div>
                <div className="product__images__list__item">
                    <img src={`data:image/jpeg;base64,${Image}`} alt="" onClick={() => setPreviewImg(Image)} />
                </div>
            </div>
            <div className="product__images__main">
                    { previewImg !== "" ?  <img src={`data:image/jpeg;base64,${previewImg}`} alt="" /> : null}
                </div>
            <div className={`product-description ${descriptionExpand ? 'expand' : ''}`}>
                <div className="product-description__title">
                    Description
                </div>
                <div className="product-description__content" dangerouslySetInnerHTML={{__html:product.description}}></div>
                <div className="product-description__toggle">
                    <Button size='sm' onClick={() => setDescriptionExpand(!descriptionExpand)}>
                        {
                            descriptionExpand ? 'show more...' : 'show less...'
                        }
                    </Button>
                </div>
            </div>
        </div>
        <div className="product__info">
            <h1 className="product__info__title">{product.name}</h1>
            <div className="product__info__item">
                <span className="product__info__item__price">
                    Price: ${numberWithComma(product.price)}
                </span>
            </div>
            {
                product.categoryId === 3 ? <div className="product__info__item">
                    <div className="product__info__item__title">
                        Color
                    </div>
                    <div className="product__info__item__list">
                        {
                            colors.map((item, index) => (
                                <div key={index} className={`product__info__item__list__item ${color === item ? 'active' : ''}`} onClick={() => setColor(item)}>
                                    <div className={`circle bg-${item}`}></div>
                                </div>
                            ))
                        }
                    </div>
                </div> : ''
            }   
            {
                product.categoryId === 3 ? <div className="product__info__item">
                    <div className="product__info__item__title">
                        Size
                    </div>
                    <div className="product__info__item__list">
                        {
                            sizes.map((item, index) => (
                                <div key={index} className={`product__info__item__list__item ${size === item ? 'active' : ''}`} onClick={() => setSize(item)}>
                                    <span className="product__info__item__list__item__size">
                                        {item}
                                    </span>
                                </div>
                            ))
                        }
                    </div>
                </div> : ''
            } 
            <div className="product__info__item">
                <Button size='sm' onClick={() => handleSubmit(product)}> Add to Cart </Button> 
                <Link to='/cart'>
                    <Button size='sm' onClick={() => dispatch(removeSelectedProduct())}> Go to Cart </Button>
                </Link>   
            </div>       
        </div>
        <div className={`product-description mobile ${descriptionExpand ? 'expand' : ''}`}>
            <div className="product-description__title">
                Description
            </div>
            <div className="product-description__content" dangerouslySetInnerHTML={{__html:product.description}}></div>
            <div className="product-description__toggle">
                <Button size='sm' onClick={() => setDescriptionExpand(!descriptionExpand)}>
                    {
                        descriptionExpand ? 'show more...' : 'show less...'
                    }
                </Button>
            </div>
        </div>
    </div>
  );
};

ProductView.propTypes = {
    product: PropTypes.object.isRequired
};

export default ProductView;
