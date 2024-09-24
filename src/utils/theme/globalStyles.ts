/** *****************************************************************
* Copyright         : 2024 Abdallah Ibrahim
* File Name         : globalStyles.ts
* Description       : This file contains the global styles shared accross the entire app
*                    
* Revision History  :
* Date				Author    		Comments
* ---------------------------------------------------------------------------
* 24/09/2024		Abdallah Ibrahim		Created.
*
/***************************************************************** */

// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable prettier/prettier */

import { createGlobalStyle, css } from 'styled-components';
import LatoRegular from 'assets/fonts/lato/Lato-Regular.ttf';
import LatoBold from 'assets/fonts/lato/Lato-Bold.ttf';

const font = (family: string, weight: string, ttf?: string, woff?: string) => css`
  @font-face {
    font-family: ${family};
    font-weight: ${weight};
    src:
      ${`local('${family}')`},
      ${ttf ? `url(${ttf}) format('truetype')${woff ? ',' : ''}` : ''} ${woff ? `url(${woff}) format('woff')` : ''};
  }
`;

const GlobalStyles = createGlobalStyle`
  ${font('Lato', '400', LatoRegular)}
  ${font('Lato', '700', LatoBold)}

  body {
    margin: 0;
    font-family: Lato;
    font-weight: 400;
  }
  
  button {
    font-family: Lato;
    font-weight: 400;
  }

  input {
    font-family: Lato;
    font-weight: 400;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    &[type=number] {
      -moz-appearance: textfield;
    }
  }

  textarea {
    font-family: Lato;
    font-weight: 400;
  }

  h1, h2, p, div {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
`;

export default GlobalStyles;
