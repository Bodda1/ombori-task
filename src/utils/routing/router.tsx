import { Routes, Route, Navigate } from 'react-router-dom';

import NotFoundPage from 'pages/NotFoundPage';

import PrivateRoute from './PrivateRoute';
import LoginRoute from './LoginRoute';
import routes from './routes';

const Router = () => (
  <Routes>
    {routes.public.map(route => (
      <Route key={route.path} path={route.path} element={route.component} />
    ))}
    {routes.private.map(route => (
      <Route key={route.path} path={route.path} element={<PrivateRoute />}>
        <Route path={route.path} element={route.component} />
      </Route>
    ))}
    <Route path="/" element={<Navigate to="/users" />} />
    <Route path="/login" element={<LoginRoute />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);

export default Router;
