import UsersPage from 'pages/UsersPage';

const routes = {
  public: [
    {
      path: '/users',
      component: <UsersPage />,
    },
  ],
  private: [
    {
      path: '/admin',
      component: <div>Admin</div>,
    },
  ],
};

export default routes;
