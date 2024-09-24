/** *****************************************************************
* Copyright         : 2024 Abdallah Ibrahim
* File Name         : routes.tsx
* Description       : This file contains a registry of public and private routes
*                    
* Revision History  :
* Date				Author    		Comments
* ---------------------------------------------------------------------------
* 24/09/2024		Abdallah Ibrahim		Created.
*
/***************************************************************** */

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
