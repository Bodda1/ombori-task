import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchUsersList } from 'modules/users/reducer';
import UsersComponent from 'modules/users/components/UsersComponent';

import { type State } from 'redux/initialState';

// ###############################################################
// <------------------------ Constants -------------------------->
// ###############################################################
// ###############################################################
// <---------------------- End Constants ------------------------>
// ###############################################################
const UsersContainer = () => {
  // ###############################################################
  // <------------------------- Globals --------------------------->
  // ###############################################################
  const loaderTimeout = useRef(0);
  const usersListApiCallParams = useRef({
    data: {
      page: 1,
      per_page: 10,
    },
  });

  const users = useSelector((state: State) => state.users.users);

  const dispatch = useDispatch();
  // ###############################################################
  // <----------------------- End Globals ------------------------->
  // ###############################################################
  // ###############################################################
  // <------------------------ useState --------------------------->
  // ###############################################################
  const [isLoaderTimerFinished, setIsLoaderTimerFinished] = useState(false);
  const [isFetchingMoreUsers, setIsFetchingMoreUsers] = useState(false);
  // ###############################################################
  // <---------------------- End useState ------------------------->
  // ###############################################################
  // ###############################################################
  // <------------------------ useEffect -------------------------->
  // ###############################################################
  const isBottomReached = (element: any) => {
    if (!element) return false;
    return element.getBoundingClientRect().bottom - window.innerHeight < 20;
  };

  const scrollToShowMoreUsers = () => {
    const wrappedElement = document.getElementById('users-wrapper');
    const currentPage = usersListApiCallParams.current.data.page;

    if (
      isBottomReached(wrappedElement) &&
      users?.details?.total_pages !== currentPage &&
      isFetchingMoreUsers === false
    ) {
      setIsFetchingMoreUsers(true);

      const currentApiParams = usersListApiCallParams.current;
      const { data } = currentApiParams;
      const { page } = data;
      const updatedApiParams = {
        data: {
          ...currentApiParams.data,
          page: page + 1,
        },
      };

      const body = {
        ...updatedApiParams,
        override: false,
        callbackAction(isSuccess: any) {
          if (isSuccess) usersListApiCallParams.current = updatedApiParams;
          else if (wrappedElement)
            wrappedElement.scroll({
              top: -40,
            });

          setIsFetchingMoreUsers(false);
        },
      };
      dispatch(fetchUsersList(body));
    }
  };

  useEffect(() => {
    const body = {
      ...usersListApiCallParams.current,
      override: true,
    };
    dispatch(fetchUsersList(body));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  useEffect(() => {
    clearTimeout(loaderTimeout.current);

    loaderTimeout.current = window.setTimeout(() => {
      setIsLoaderTimerFinished(true);
    }, 3000);

    return () => {
      clearTimeout(loaderTimeout.current);
    };
  }, []);

  useEffect(
    () => () => {
      document.removeEventListener('scroll', scrollToShowMoreUsers);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  useEffect(() => {
    document.addEventListener('scroll', scrollToShowMoreUsers);
    return () => {
      document.removeEventListener('scroll', scrollToShowMoreUsers);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [users]);
  // ###############################################################
  // <---------------------- End useEffect ------------------------>
  // ###############################################################
  // ###############################################################
  // <--------------------- rest of hooks ------------------------->
  // ###############################################################
  // ###############################################################
  // <-------------------- End rest of hooks ---------------------->
  // ###############################################################
  // ###############################################################
  // <-------------------------- Logic ---------------------------->
  // ###############################################################
  // ###############################################################
  // <------------------------ End Logic -------------------------->
  // ###############################################################
  // ###############################################################
  // <------------------------- Actions --------------------------->
  // ###############################################################
  // ###############################################################
  // <----------------------- End Actions ------------------------->
  // ###############################################################
  // ###############################################################
  // <----------------------- UI Handlers ------------------------->
  // ###############################################################
  // ###############################################################
  // <--------------------- End UI Handlers ----------------------->
  // ###############################################################
  // ###############################################################
  // <-------------------------- Render --------------------------->
  // ###############################################################
  // ###############################################################
  // <------------------------ End Render ------------------------->
  // ###############################################################
  // ###############################################################
  // <------------------------- Return UI ------------------------->
  // ###############################################################
  return (
    <UsersComponent
      currentPage={usersListApiCallParams.current.data.page}
      isLoaderTimerFinished={isLoaderTimerFinished}
      isFetchingMoreUsers={isFetchingMoreUsers}
    />
  );
  // ###############################################################
  // <----------------------- End Return UI ----------------------->
  // ###############################################################
};

UsersContainer.propTypes = {};

UsersContainer.defaultProps = {};

export default UsersContainer;
