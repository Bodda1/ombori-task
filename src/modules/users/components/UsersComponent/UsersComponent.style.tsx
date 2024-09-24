import styled, { css, keyframes } from 'styled-components';
import themeData from 'utils/theme/themeData';

const { typography } = themeData;

// ###############################################################
// <---------------------- Users Component ---------------------->
// ###############################################################
export const NoResultsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const NoResultsTitle = styled(typography.H3BoldTypography)`
  margin: 0;
  color: ${({ theme }) => theme.colors.onBackground};
`;

export const NoResultsSubTitle = styled(typography.P2RegularTypography)`
  margin: 0;
  color: ${({ theme }) => theme.colors.onSurfaceVariant};
  text-align: center;
  white-space: break-spaces;
`;

export const UsersWrapper = styled.div`
  flex-grow: 1;
`;

export const Header = styled.div`
  padding: 20px 0;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const HeaderTitle = styled(typography.H2BoldTypography)`
  margin: 0;
  color: ${({ theme }) => theme.colors.secondaryContent};
  text-align: center;
`;

export const ItemsWrapper = styled.div`
  padding: 0 20px;
`;

export const ItemWrapper = styled.div`
  display: flex;
  align-items: center;

  & > * + * {
    margin-inline-start: 20px;
  }
`;

export const UserImageWrapper = styled.div``;

export const UserName = styled.div``;

export const SmallLoaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const extendLoaderStyle = css`
  border-color: ${({ theme }) => theme.colors.neutral};
  border-top-color: ${({ theme }) => theme.colors.primary};
`;

export const extendUserImageStyle = css`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  object-fit: cover;
`;
// ###############################################################
// <--------------------- End Users Component ------------------->
// ###############################################################

// ###############################################################
// <-------------------------- Loader --------------------------->
// ###############################################################
const pulseAnimation = keyframes`
  0% {
    transform: scale(0.1);
    -webkit-transform: scale(0.1);
    opacity: 0;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    transform: scale(1.6);
    -webkit-transform: scale(1.6);
    opacity: 0;
  }
`;

export const LoaderWrapper = styled.div``;

export const Base = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto auto;
  width: 100px;
  height: 100px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
`;

export const OuterLoadingCircle = styled(Base)`
  animation: ${pulseAnimation} 1.5s infinite;
  -webkit-animation: ${pulseAnimation} 1.5s infinite;
`;

export const InnerLoadingCircle = styled(Base)`
  animation: ${pulseAnimation} 1.5s infinite 0.3s;
  -webkit-animation: ${pulseAnimation} 1.5s infinite 0.3s;
`;

export const Center = styled(Base)`
  width: 30px;
  height: 30px;
`;
// ###############################################################
// <------------------------ End Loader ------------------------->
// ###############################################################
