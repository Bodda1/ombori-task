import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import themeData from 'utils/theme/themeData';
import MainContainer from 'modules/common/containers/MainContainer';

import store from './redux/store';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={themeData}>
        <MainContainer />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>
);

export default App;
