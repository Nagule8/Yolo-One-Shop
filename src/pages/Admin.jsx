import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from "react-router-dom";

import Sidebar from '../components/Sidebar';

import FetchUserActivity from '../fetchData/FetchUserActivity';

const Admin = () => {

    const {fetchUserActivities} = FetchUserActivity();
    const UserId =useSelector((state)=> state.user.userid);

    useEffect(() => {
      if(UserId === 6){
        fetchUserActivities();
      }
    
    }, [UserId]);
    

    return (
        <div style={{
            padding: '50px 0px 0px 370px'
        }}>
            <Sidebar />
            <Outlet />
        </div>
    );
};

export default Admin;
