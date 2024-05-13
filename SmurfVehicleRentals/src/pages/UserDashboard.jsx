import { logout } from '../functions/auth';
import { UserAuth } from '../context/AuthContext';
import React from 'react';
import { UserDashboardJS } from '../components/component/UserDashboardJS';
import FooterN from '../components/FooterN';

const UserDashboard = () => {
    const {user} = UserAuth();
  
 return ( 
    <>
    <UserDashboardJS/>
    <FooterN/>
    </>
    );
};

export default UserDashboard;