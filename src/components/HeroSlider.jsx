import React,{useState, useEffect, useCallback} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";

import Button from './Button';

const HeroSlider = props => {

    const data = props.data;
    const timeout = props.timeOut ? props.timeOut : 3000;

    const [activeSlide, setActiveSlide] = useState(0);

    const nextSlide = useCallback(
        () => {
            const index = activeSlide + 1 === data.length ? 0 : activeSlide + 1;
            setActiveSlide(index);
        },
        [activeSlide, data],
    )

    const previousSlide = () => {
        const index = activeSlide - 1 < 0 ? data.length - 1 : activeSlide - 1;
        setActiveSlide(index);
    }

    useEffect(() => {
        if (props.auto) {
            const slideAuto = setInterval(() => {
                nextSlide();
            },timeout);
            return () => {
                clearInterval(slideAuto);
            }
        }
        
    }, [nextSlide, timeout, props])

    return (
        <div className='hero-slider'>
            {
                data.map((item, index) => (
                    <HeroSliderItem key={index} item={item} active={index === activeSlide} />
                ))
            }
            {
                props.control ? (
                    <div className="hero-slider__control">
                        <div className="hero-slider__control__item" onClick={previousSlide}>
                            <i className='bx bx-chevron-left'></i>
                        </div>
                        <div className="hero-slider__control__item">
                            <div className="index">
                                {activeSlide + 1}/{data.length}
                            </div>
                        </div>
                        <div className="hero-slider__control__item" onClick={nextSlide}>
                            <i className='bx bx-chevron-right'></i>
                        </div>

                    </div>
                ) : null
            }
        </div>
    )
}

HeroSlider.propTypes = {
    data: PropTypes.array.isRequired,
    control: PropTypes.bool,
    auto: PropTypes.bool,
    timeout: PropTypes.number
}

const HeroSliderItem = props =>{
    const images = useSelector(state => state.images.images);

    const [imagedata, setImage] = useState("");

    const getImage = ()=>{
        images.map((image)=>{      
          if(image.imagename === (props.item.imageName)){
            setImage(image.image);
          }
        })
    }

    useEffect(() => {
        getImage();

    },[images]);
    
    
    return(
        <div className={`hero-slider__item ${props.active ? 'active' : ''}`}>
            <div className="hero-slider__item__info">
                <div className={`hero-slider__item__info__title color-pink`}>
                    <span>{props.item.name}</span>
                </div>
                <div className="hero-slider__item__info__description">
                    <span>{props.item.description}</span>
                </div>
                <div className="hero-slider__item__info__btn">
                    <Link to={`/catalog/${props.item.id}`}>
                        <Button
                            backgroundColor="pink"
                            icon="bx bx-cart"
                            animate={true}
                            //size='sm'
                        >
                            Go
                        </Button>
                    </Link>
                </div>
            </div>
            <div className="hero-slider__item__image">
                <div className={`shape bg-${props.item.color}`}>

                </div>
                <img src={`data:image/jpeg;base64,${imagedata}`} alt="" />
            </div>
        </div>
    );
}

export default HeroSlider
