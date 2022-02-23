import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const sidebarNav = [
    {
        display: 'Category',
        icon: <i className='bx bx-star'></i>,
        to: '/panel/category',
        section: '/category'
    },
    {
        display: 'Product',
        icon: <i className='bx bx-star'></i>,
        to: '/panel/product',
        section: '/product'
    }
        
]

const superSuNav = [
    {
        display: 'Users',
        icon: <i className='bx bx-user'></i>,
        to: '/panel/users',
        section: '/users'
    },
    {
        display: 'Users Activities',
        icon: <i className='bx bx-star'></i>,
        to: '/panel/user__activities',
        section: '/user__activities'
    }

]

const Sidebar = () => {

    const name = window.localStorage.getItem("Name");

    const [activeIndex, setActiveIndex] = useState(0);
    const [stepHeight, setStepHeight] = useState(0);
    const sidebarRef = useRef();
    const indicatorRef = useRef();
    const location = useLocation();

    if(name === "SuperUser") {
        superSuNav.forEach((item) => {
            sidebarNav.push(item);
        })
    }

    useEffect(() => { 
        setTimeout(() => {
            const sidebarItem = sidebarRef.current.querySelector('.sidebar__menu__item');
            indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
            setStepHeight(sidebarItem.clientHeight);
        }, 50);
    }, []);

    // change active index
    useEffect(() => {
        const curPath = window.location.pathname.split('/panel')[1];
        const activeItem = sidebarNav.findIndex(item => item.section === curPath);
        setActiveIndex(curPath.length === 0 ? 0 : activeItem);
    }, [location]);       

    return (
        <div className='sidebar'>
            <div className="sidebar__logo">
                {name}
            </div>
            <div ref={sidebarRef} className="sidebar__menu">
                <div
                    ref={indicatorRef}
                    className="sidebar__menu__indicator"
                    style={{
                        transform: `translateX(-50%) translateY(${activeIndex * stepHeight}px)`
                    }}
                ></div>
                {
                    sidebarNav.map((item, index) => (
                        <Link to={item.to} key={index}>
                            <div className={`sidebar__menu__item ${activeIndex === index ? 'active' : ''}`}>
                                <div className="sidebar__menu__item__icon">
                                    {item.icon}
                                </div>
                                <div className="sidebar__menu__item__text">
                                    {item.display}
                                </div>
                            </div>
                        </Link>
                    ))
                }
                
            </div>
        </div>
    );
};

export default Sidebar;
