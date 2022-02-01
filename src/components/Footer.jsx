import React from 'react';
import { Link } from 'react-router-dom';

import Grid from './Grid';
import logo from '../assets/images/Logo-2.png';

const footerAboutLinks = [
    {
        display: "Facebook",
        path: "/about"
    },
    {
        display: "Instagram",
        path: "/about"
    },
    {
        display: "Twitter",
        path: "/about"
    }
]

const footerCustomerLinks = [
    {
        display: "About-1",
        path: "/about"
    },
    {
        display: "About-2",
        path: "/about"
    },
    {
        display: "About-3",
        path: "/about"
    }
]

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='container'>
                <Grid 
                    col={4}
                    mdCol={2}
                    smCol={1}
                    gap={10}
                >
                    <div>
                        <div className='footer__title'>
                            Get to know Us
                        </div>
                        <div className='footer__content'>
                            <p>About Us</p>
                            <p>Careers</p>
                            <p>Gift a smile</p>
                        </div>
                    </div>
                    <div>
                        <div className='footer__title'>
                            Connect with Us
                        </div>
                        <div className='footer__content'>
                            {
                                footerAboutLinks.map((item, index) => (
                                    <p key={index}>
                                        <Link to={item.path}>
                                            {item.display}
                                        </Link>
                                    </p>
                                ))
                            }
                        </div>
                    </div>
                    <div className='footer__about'>
                        <p>
                            <Link to='/'>
                                <img src={logo} className='footer__logo' alt='' />
                            </Link>
                        </p>
                        <p>
                            Yolo.com, Inc. is an American multinational technology company which focuses on e-commerce and digital streaming
                            . It is one of the Big Five companies in the U.S. information technology industry,
                             along with Google, Apple, Meta, and Microsoft.
                        </p>
                    </div>
                </Grid>
            </div>
        </footer>
    )
}

export default Footer
