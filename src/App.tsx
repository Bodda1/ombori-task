/** *****************************************************************
* Copyright         : 2024 Abdallah Ibrahim
* File Name         : app.tsx
* Description       : This file contains the main wrappers for the app
*                    
* Revision History  :
* Date				Author    		Comments
* ---------------------------------------------------------------------------
* 24/09/2024		Abdallah Ibrahim		Created.
*
/***************************************************************** */

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
