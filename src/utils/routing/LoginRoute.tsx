/** *****************************************************************
* Copyright         : 2024 Abdallah Ibrahim
* File Name         : LoginRoute.tsx
* Description       : This file responsible for providing access to the login route
* or denying it based on the user auth access
*                    
* Revision History  :
* Date				Author    		Comments
* ---------------------------------------------------------------------------
* 24/09/2024		Abdallah Ibrahim		Created.
*
/***************************************************************** */

import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

import LoginPage from 'pages/LoginPage';
import AuthenticationPage from 'pages/AuthenticationPage';

const LoginRoute = () => {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(true);

  // this is where authentication logic should exist but we we are
  // hardcoding the auth value to true for the sake of the demo
  useEffect(() => {
    setIsUserAuthenticated(true);
  }, []);

  if (isUserAuthenticated === true) return <Navigate to="/" />;

  if (isUserAuthenticated === false) return <LoginPage />;

  return <AuthenticationPage />;
};

export default LoginRoute;
