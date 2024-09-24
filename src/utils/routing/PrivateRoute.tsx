import { useState, useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import AuthenticationPage from 'pages/AuthenticationPage';

const PrivateRoute = () => {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(true);

  // this is where authentication logic should exist but we we are
  // hardcoding the auth value to true for the sake of the demo
  useEffect(() => {
    setIsUserAuthenticated(true);
  }, []);

  if (isUserAuthenticated === true) return <Outlet />;

  if (isUserAuthenticated === false) return <Navigate to="/login" />;

  return <AuthenticationPage />;
};

export default PrivateRoute;
