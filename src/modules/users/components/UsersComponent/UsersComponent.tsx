import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { ThemeContext } from 'styled-components';

import Avatar from 'assets/images/avatar.png';
import { status } from 'constants/general';
import usersStrings from 'modules/users/strings';
import DynamicImage from 'modules/common/components/DynamicImage';
import Loader from 'modules/common/components/Loader';
import SectionDivider from 'modules/common/components/SectionDivider';

import { type State } from 'redux/initialState';
import { type Props, type UserItemProps } from './users-component';

import {
  NoResultsWrapper,
  NoResultsTitle,
  NoResultsSubTitle,
  UsersWrapper,
  Header,
  HeaderTitle,
  ItemsWrapper,
  ItemWrapper,
  UserImageWrapper,
  UserName,
  SmallLoaderWrapper,
  /* ####################### */
  LoaderWrapper,
  Center,
  InnerLoadingCircle,
  OuterLoadingCircle,
} from './UsersComponent.style';

const PulseLoader = () => (
  <LoaderWrapper>
    <OuterLoadingCircle />
    <InnerLoadingCircle />
    <Center />
  </LoaderWrapper>
);

/* ############################################################################### */
/* ############################################################################### */
/* ############################################################################### */

const UserItem = ({ userData }: UserItemProps) => {
  const { first_name: firstName, last_name: lastName, avatar } = userData;
  const fullName = `${firstName} ${lastName}`;

  return (
    <ItemWrapper>
      <UserImageWrapper>
        <DynamicImage placeholderImageUrl={Avatar} imageUrl={avatar} />
      </UserImageWrapper>
      <UserName>{fullName}</UserName>
    </ItemWrapper>
  );
};
UserItem.propTypes = {
  userData: PropTypes.shape({}).isRequired,
};

/* ############################################################################### */
/* ############################################################################### */
/* ############################################################################### */

const UsersComponent = ({ currentPage, isLoaderTimerFinished, isFetchingMoreUsers }: Props) => {
  const themeContext = useContext(ThemeContext);
  const { colors } = themeContext;

  const users = useSelector((state: State) => state.users.users);
  const { status: usersStatus, details } = users;
  const { data: usersArr, total_pages: totalPages } = details;

  const { notFound: notFoundStrings } = usersStrings;
  const { usersList: usersListStrings } = usersStrings;

  // here we check if loader not finished or data not available we show loader
  // tell both conditions are met
  if ((usersStatus === status.FETCHING && !usersArr) || isLoaderTimerFinished === false)
    return <PulseLoader />;

  if (
    (usersStatus === status.SUCCESS && usersArr?.length === 0) ||
    (usersStatus === status.FAIL && !usersArr)
  )
    return (
      <NoResultsWrapper>
        <NoResultsTitle>{notFoundStrings.title}</NoResultsTitle>
        <SectionDivider gap={18} />
        <NoResultsSubTitle>{notFoundStrings.subTitle}</NoResultsSubTitle>
      </NoResultsWrapper>
    );

  return (
    <UsersWrapper>
      <Header>
        <HeaderTitle>{usersListStrings.headerTitle}</HeaderTitle>
      </Header>
      <SectionDivider gap={16} />
      <ItemsWrapper id="users-wrapper">
        {usersArr?.map((user: any, index: number) => {
          const { id } = user;
          const isLastIndex = index === usersArr.length - 1;

          return (
            <React.Fragment key={id}>
              <UserItem userData={user} />
              {isLastIndex === false && (
                <SectionDivider
                  gap={16}
                  withSeparator
                  separatorGap={16}
                  borderColor={colors.base100}
                />
              )}
            </React.Fragment>
          );
        })}
      </ItemsWrapper>
      {isFetchingMoreUsers && (
        <>
          <SectionDivider gap={20} />
          <SmallLoaderWrapper>
            <Loader width={25} height={25} thickness={4} />
          </SmallLoaderWrapper>
        </>
      )}
      {currentPage === totalPages && (
        <>
          <SectionDivider gap={20} />
          <NoResultsSubTitle>{usersListStrings.noMoreData}</NoResultsSubTitle>
          <SectionDivider gap={30} />
        </>
      )}
    </UsersWrapper>
  );
};

UsersComponent.propTypes = {
  isLoaderTimerFinished: PropTypes.bool.isRequired,
  isFetchingMoreUsers: PropTypes.bool.isRequired,
};

export default UsersComponent;
