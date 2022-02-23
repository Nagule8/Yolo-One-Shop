import React, { useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import logo from '../assets/images/Logo-2.png';

import Button from './Button';

import Login_Logout from '../fetchData/Login_Logout';

const mainNav = [
    {
        display: "Home",
        path: "/"
    },
    {
        display: "Catalog",
        path: "/catalog"
    },
    {
        display: "About Us",
        path: "/about"
    }
]

const Header = () => {
    const name = window.localStorage.getItem("Name");

    const {pathname} = useLocation();
    let navigate = useNavigate();
    const activeNav = mainNav.findIndex(e => e.path === pathname);

    const username = window.localStorage.getItem("Name");

    const headerRef = useRef(null);

    const {logout} = Login_Logout();

    const logoutUser = () => {
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("Name");
        logout();
        navigate("/");
    }

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('shrink');
            } else {
                headerRef.current.classList.remove('shrink');
            }
        })            
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);

    const menuLeft = useRef(null);
    const menuToggle = () => menuLeft.current.classList.toggle('active');

    return (
        <div className='header' ref={headerRef}>
            <div className="container">
                <div className="header__logo">
                    <Link to="/" >
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <div className="header__menu">
                    <div className="header__menu__mobile-toggle" onClick={menuToggle}>
                        <i className='bx bx-menu-alt-left'></i>
                    </div>
                    <div className="header__menu__left" ref={menuLeft}>
                        <div className="header__menu__left__close" onClick={menuToggle}>
                            <i className='bx bx-chevron-left'></i>
                        </div>
                        {
                            mainNav.map((item, index) => (
                                <div 
                                    key={index} 
                                    className={`header__menu__item header__menu__left__item ${index === activeNav ? 'active' : ''}`}
                                    onClick={menuToggle}    
                                >
                                    <Link to={item.path}>
                                        <span>{item.display}</span>
                                    </Link>
                                </div>
                            ))
                        }  
                        {
                            name === "Admin" || name === "SuperUser" ? <div 
                                className={`header__menu__item header__menu__left__item active`}
                                onClick={menuToggle}    
                            >
                                <Link to='/panel'>
                                    <span>{name}</span>
                                </Link>
                            </div> : null
                        }                      
                    </div>
                    
                    <div className="header__menu__right">
                        {/*<div className="header__menu__item header__menu__right__item">
                            <i className='bx bx-search'></i>
                        </div>*/}
                        <div className="header__menu__item header__menu__right__item">
                            <Link to={username ? '/cart' : '/register' }>
                                <i className='bx bx-shopping-bag'></i>
                            </Link>
                        </div>
                        <div className="header__menu__item header__menu__right__item">
                            {
                                username ? (<Button onClick={() => logoutUser()}>Logout</Button>) :
                                (<Link to='/register'>
                                    <i className='bx bx-user'></i>
                                </Link>)
                            }
                        </div>
                    </div>
                </div>
            </div>        
        </div>
    )
}

export default Header