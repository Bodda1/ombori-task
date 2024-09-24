import { setContext } from 'modules/common/reducer';

import store from '../../redux/store';

const initApp = (context: string) => {
  store.dispatch(setContext(context));
};

export default initApp;
