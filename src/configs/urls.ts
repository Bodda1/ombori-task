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
