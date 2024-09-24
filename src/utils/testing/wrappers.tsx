import { ThemeProvider } from 'styled-components';

import themeData from 'utils/theme/themeData';

export const withThemeProvider = (Component: any) => (
  <ThemeProvider theme={themeData}>{Component}</ThemeProvider>
);
