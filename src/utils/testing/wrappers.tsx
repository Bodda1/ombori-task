/** *****************************************************************
* Copyright         : 2024 Abdallah Ibrahim
* File Name         : wrapper.tsx
* Description       : This file contains the styled components theme wrapper for test cases
*                    
* Revision History  :
* Date				Author    		Comments
* ---------------------------------------------------------------------------
* 24/09/2024		Abdallah Ibrahim		Created.
*
/***************************************************************** */

import { ThemeProvider } from 'styled-components';

import themeData from 'utils/theme/themeData';

export const withThemeProvider = (Component: any) => (
  <ThemeProvider theme={themeData}>{Component}</ThemeProvider>
);
