// using a view layer between page and container may seem redundant
// but it comes in handy when a single view can switch between two containers

import UsersContainer from 'modules/users/containers/UsersContainer';

const UsersView = () => <UsersContainer />;

export default UsersView;
