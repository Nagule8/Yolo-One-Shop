import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import UserActivityCard from './components/UserActivityCard';

import Pagination from '../Pagination';

const UserActivities = () => {

    const useractivities = useSelector((state) => state.userActivity.userActivities);

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(50);

    //Current user activities
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = useractivities.slice(indexOfFirstPost, indexOfLastPost); 

    //Change page
    const paginate = (pageNumber) => {
        console.log(pageNumber);
        setCurrentPage(pageNumber);
    }

    return (
        <div className='dashboard'>
            <h1>User Activities</h1>
            <div className=''>
                { 
                    currentPosts.map((item, index) => (
                        <UserActivityCard key={index} userActivity={item} />
                    ))
                }
            </div>

            <Pagination currentPage={currentPage} postsPerPage={postsPerPage} totalPosts={useractivities.length} paginate={paginate} />
        </div>
    );
};

export default UserActivities;
