import Loader from 'modules/common/components/Loader';

import { LoaderWrapper } from './AuthenticationView.style';

const AuthenticationView = () => (
  <LoaderWrapper>
    <Loader width={60} height={60} thickness={8} />
  </LoaderWrapper>
);

export default AuthenticationView;
