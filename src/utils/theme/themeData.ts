// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable prettier/prettier */

import styled, { css, DefaultTheme } from 'styled-components';

import { sizes } from './styled.d';
import { type Typography } from './styled';

const colors = {
  primary: '#6BBE4F',
  'primary-content': '',
  secondary: '#EEF1F5',
  secondaryContent: '#111E3B',
  accent: '',
  'accent-content': '',
  neutral: '#EEF1F5',
  'neutral-content': '',
  'base100': '#E1E5E7',
  'base-200': '',
  'base-300': '',
  'base-content': '',
  info: '',
  'info-content': '',
  success: '',
  'success-content': '',
  warning: '',
  'warning-content': '',
  error: '',
  'error-content': '',
  white: '#FFFFFF',
};

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (literals: TemplateStringsArray, ...placeholders: any[]) => css`
     @media (max-width: ${sizes[label]}px) {
        ${css(literals, ...placeholders)};
     }
  `.join('');
  return acc;
}, {}  as Record<keyof typeof sizes, (l: TemplateStringsArray, ...p: any[])=> string>);

const typography: Typography = {
  H1BoldTypography: styled.p`
    font-size: 33px;
    font-weight: 700;
    line-height: 40px;
  `,
  H1RegularTypography: styled.p`
    font-size: 33px;
    font-weight: 400;
    line-height: 40px;
  `,
  H2BoldTypography: styled.p`
    font-size: 28px;
    font-weight: 700;
    line-height: 34px;
  `,
  H2RegularTypography: styled.p`
    font-size: 28px;
    font-weight: 400;
    line-height: 34px;
  `,
  H3BoldTypography: styled.p`
    font-size: 23px;
    font-weight: 700;
    line-height: 28px;
  `,
  H3RegularTypography: styled.p`
    font-size: 23px;
    font-weight: 400;
    line-height: 28px;
  `,
  P1BoldTypography: styled.p`
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
  `,
  P1RegularTypography: styled.p`
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
  `,
  P2BoldTypography: styled.p`
    font-size: 13px;
    font-weight: 700;
    line-height: 16px;
  `,
  P2RegularTypography: styled.p`
    font-size: 13px;
    font-weight: 400;
    line-height: 16px;
  `,
  P3BoldTypography: styled.p`
    font-size: 11px;
    font-weight: 700;
    line-height: 13px;
  `,
  P3RegularTypography: styled.p`
    font-size: 11px;
    font-weight: 400;
    line-height: 13px;
  `,
};

const themeData: DefaultTheme = {
  colors,
  media,
  typography,
};

export default themeData;
