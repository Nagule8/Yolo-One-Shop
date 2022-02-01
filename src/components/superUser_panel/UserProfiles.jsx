import React from 'react';
import { useSelector } from 'react-redux';

import UserCard from './components/UserCard';

const UserProfiles = () => {
    const users = useSelector((state) => state.user.users);
    return (
        <div className='dashboard'>
            <h1>User Cards</h1>
            <div className='dashboard__container'>
            {
                users.map((item, index) => (
                    <UserCard key={index} user={item}  />
                ))
            }
            </div>
        </div>
    );
};

export default UserProfiles;
