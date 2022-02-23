import React,{useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";

import Helmet from '../components/Helmet';
import HeroSlider from '../components/HeroSlider';
import Section, {SectionTitle, SectionBody} from '../components/Section';
import PolicyCard from '../components/PolicyCard';
import Grid from '../components/Grid';
import ProductCard from '../components/ProductCard';


import policy from '../assets/fake-data/policy';
import banner from '../assets/images/banner.png';

const Home = () => {    

    const [topSelling, setTopSelling] = useState([]);
    const [newArrival, setNewArrival] = useState([]);
    const [popular, setPopular] = useState([]);

    const products = useSelector((state)=> state.allProducts.products);
    
    //render random products
    useEffect(()=>{

        const randomProductSelector = () => {

            setNewArrival((products.sort(()=> Math.random() - Math.random()).slice(0,3)));
            setTopSelling(products.sort(()=> Math.random() - Math.random()).slice(0,4));
            setPopular(products.sort(()=> Math.random() - Math.random()).slice(0,5));
        } 
        
        randomProductSelector();
    },[products]);

    return (
        <Helmet title='Made for U'>
            {/* Hero slider */}
            { Object.keys(popular).length === 0 ? <div>Loading...</div> :
                <HeroSlider data={newArrival} control={true} auto={true} timeout={5000} />
            }
            {/* End Hero slider */}   

            {/* policy section */}
            <Section>
                <SectionBody>
                    <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                        {                        
                            policy.map((item, index) => (  
                                <Link key={index} to='/policy'>
                                    <PolicyCard                                                                               
                                        name={item.name}
                                        description={item.description}
                                        icon={item.icon}
                                    />
                                </Link>
                             ))
                        }
                    </Grid>
                </SectionBody>
            </Section>
            {/* end policy section */}   

            {/* best selling section */}
            <Section>
                <SectionTitle>
                    Top selling products of the week
                </SectionTitle>
                <SectionBody>
                    <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                        {
                            topSelling.map((item, index) => (
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
            {/* end best selling section */}

            {/* new arrival section */}
            <Section>
                <SectionTitle>
                    new product
                </SectionTitle>
                <SectionBody>
                    <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                        {
                            newArrival.map((item, index) => (
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
            {/* end new arrival section */}

            {/* banner */}     
                <Section>
                    <SectionBody>
                        <Link to='/catalog'>
                            <img src={banner} alt="" />
                        </Link>
                    </SectionBody>
                </Section>
            {/* end banner */}   

            {/* popular product section */}
            <Section>
                <SectionTitle>
                    popular product
                </SectionTitle>
                <SectionBody>
                    <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                        {
                            popular.map((item, index) => (
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
            {/* end popular product section */}   
            
        </Helmet>
    )
}

export default Home
