import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import { useParams } from 'react-router-dom';

import Helmet from '../components/Helmet';
import Section, {SectionBody, SectionTitle} from '../components/Section';
import Grid from '../components/Grid';
import ProductCard from '../components/ProductCard';
import ProductView from '../components/ProductView';

import { selectedProduct, removeSelectedProduct } from '../redux/actions/productActions';

const Product =() => {
    const products = useSelector((state)=> state.allProducts.products);
    let product = useSelector((state)=>state.allProducts.product);
    
    const productId = useParams();
    const dispatch = useDispatch();

    const selectProduct = (id) => {
        products.forEach((item) => {
            if(item.id === parseInt(id)) {
                dispatch(selectedProduct(item));
            }
        })
    }

    useEffect(()=>{ 
        window.scrollTo(0, 0);

        selectProduct(productId.id);

        return()=>{
            dispatch(removeSelectedProduct());
        }
        
    },[productId]);


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
                        {Object.keys(products).length === 0 ? (<div>
                                Loading...
                            </div>) :
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
