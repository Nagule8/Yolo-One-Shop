import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import { useParams } from 'react-router-dom';

import Helmet from '../components/Helmet';
import Section, {SectionBody, SectionTitle} from '../components/Section';
import Grid from '../components/Grid';
import ProductCard from '../components/ProductCard';
import ProductView from '../components/ProductView';

import { selectedProduct, removeSelectedProduct } from '../redux/actions/productActions';

const Product = props => {
    const products = useSelector((state)=> state.allProducts.products);
    let product = useSelector((state)=>state.product);

    const selectProduct = (id) => {
        products.map((item, index) => {
            if(item.id == id) {
                dispatch(selectedProduct(item));
            }
        })
    }
    
    const productId = useParams();
    const dispatch = useDispatch();

    useEffect(()=>{ 
        window.scrollTo(0, 0);
        if(productId.id && productId.id!=="") {
            selectProduct(productId.id);
        }
        return()=>{
            dispatch(removeSelectedProduct());
        }
        
    },[productId.id]);

    return (
        <Helmet title={product.name}>
            <Section>
                <SectionBody>
                    {Object.keys(product).length === 0 ? (<div>
                        Loading...
                    </div>) :
                    <ProductView product={product} />
                    }
                </SectionBody>
            </Section>

            <Section>
                <SectionTitle>
                    Discover more
                </SectionTitle>
                <SectionBody>
                    <Grid
                        col={3}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                        { Object.keys(product).length === 0 ? <div>
                            Loading...
                        </div> :
                            products.map((item, index) => (
                                <ProductCard 
                                    key={index}
                                    name={item.name}
                                    id={item.id}
                                    description={item.description}
                                    price={item.price}
                                    categoryId={item.categoryId}
                                    imageName={item.imageName}
                                />
                            ))
                        }

                    </Grid>
                </SectionBody>
            </Section>
        </Helmet>
    )
}

export default Product
