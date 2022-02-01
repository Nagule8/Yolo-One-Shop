import React, { useRef } from 'react';
import { useSelector } from "react-redux";

import Helmet from '../components/Helmet';
import Grid from '../components/Grid';
import ProductCard from '../components/ProductCard';
import CheckBox from '../components/CheckBox';
import Button from '../components/Button';

import FilterFunctions from '../containers/Filter/FilterFunctions';

const Catalog = () => {
    const products = useSelector((state)=> state.allProducts.products);
    const categories = useSelector((state)=> state.allCategories.categories);

    const {filterProducts, sortProducts, searchProducts, clearFilter} = FilterFunctions();

    const filterRef = useRef(null);
    const showHideFilter = () => filterRef.current.classList.toggle('active');

    const sortValue = [
        "Latest","Highest", "Lowest", "Alphabetic"
    ]

    return (
        <Helmet title='Catalog'>
            <div className="catalog">
                <div ref={filterRef} className="catalog__filter">
                    <div className="catalog__filter__close" onClick={() => showHideFilter()}>
                        <i className='bx bx-left-arrow-alt'></i>
                    </div>

                    <div className="catalog__filter__widget">
                        <div className="catalog__filter__widget__title">
                            Search
                        </div>
                        <div className="catalog__filter__widget__content">
                            <input type="text" id="searchProduct" placeholder="Search..." onChange={searchProducts}  />
                        </div>
                    </div>

                    <div className="catalog__filter__widget">
                        <div className="catalog__filter__widget__title">
                            Product Portfolio
                        </div>
                        <div className="catalog__filter__widget__content">
                            {
                                categories.map((item, index) => (
                                    <div key={index} className='catalog__filter__widget__content__item'>
                                        <CheckBox 
                                            label={item.name}
                                            name={item.id}
                                            filter={filterProducts}
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className="catalog__filter__widget">
                        <div className="catalog__filter__widget__title">
                            Sort Products
                        </div>
                        <div className="catalog__filter__widget__content">
                            {
                                sortValue.map((item, index) => (
                                    <div key={index} className='catalog__filter__widget__content__item'>
                                        <CheckBox 
                                            label={item}
                                            name={item}
                                            filter={sortProducts}
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                </div>
                <div className="catalog__filter__toggle">
                    <Button size='sm' onClick={() => showHideFilter()}>
                    Filter
                    </Button>
                </div>

                <div className="catalog__content">
                    <Grid
                        col={3}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                        {
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
                </div>
            </div>
        </Helmet>
    )
}

export default Catalog
