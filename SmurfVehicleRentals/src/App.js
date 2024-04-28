import React from 'react';
import './index.css';
import './components/hero'

import { UserAuth } from './context/AuthContext';


import UserRoutes from './routes/UserRoutes';
import NonUserRoutes from './routes/NonUserRoutes';


const App = () => {

const{ isLoggedOut } = UserAuth();
 return (
    <div>
        {isLoggedOut ? (<NonUserRoutes/>) : ( <UserRoutes/>)}
       
    </div>
    );
};

export default App;