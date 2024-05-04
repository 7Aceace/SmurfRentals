import { logout } from '../functions/auth';
import { UserAuth } from '../context/AuthContext';
import React from 'react';


const UserDashboard = () => {
    const {user} = UserAuth();
    const handleLogout = () =>{
        logout();
    }
 return ( 
    <>
    <div>Welcome {user?.firstName}</div>
  
    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
    onClick={handleLogout}>Logout</button>
    </>
    );
};

export default UserDashboard;