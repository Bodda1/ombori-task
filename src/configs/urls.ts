/** *****************************************************************
* Copyright         : 2024 Abdallah Ibrahim
* File Name         : urls.ts
* Description       : This file contains all api calls urls
*                    
* Revision History  :
* Date				Author    		Comments
* ---------------------------------------------------------------------------
* 24/09/2024		Abdallah Ibrahim		Created.
*
/***************************************************************** */

const baseUrls = {
  // this url should exist in env variables of course but was hardcoded for
  // the sake of the demo
  projectGatewayUsersApiBaseUrl: 'https://reqres.in/api',
};

const urls = {
  usersUrls: {
    getUsers: `${baseUrls.projectGatewayUsersApiBaseUrl}/users`,
  },
};

export default urls;
