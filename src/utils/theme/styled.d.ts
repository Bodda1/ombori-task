// import original module declarations
import 'styled-components';

export type Sizes = {
  [key: string]: any;
};

export type Typography = {
  H1BoldTypography: any;
  H1RegularTypography: any;
  H2BoldTypography: any;
  H2RegularTypography: any;
  H3BoldTypography: any;
  H3RegularTypography: any;
  P1BoldTypography: any;
  P1RegularTypography: any;
  P2BoldTypography: any;
  P2RegularTypography: any;
  P3BoldTypography: any;
  P3RegularTypography: any;
};

export const sizes: Sizes = {
  xs: 480,
  sm: 768,
  md: 992,
  lg: 1200,
};

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      'primary-content': string;
      secondary: string;
      secondaryContent: string;
      accent: string;
      'accent-content': string;
      neutral: string;
      'neutral-content': string;
      base100: string;
      'base-200': string;
      'base-300': string;
      'base-content': string;
      info: string;
      'info-content': string;
      success: string;
      'success-content': string;
      warning: string;
      'warning-content': string;
      error: string;
      'error-content': string;
      white: string;
    };

    media: Record<keyof typeof sizes, (l: TemplateStringsArray, ...p: any[]) => string>;

    typography: Typography;
  }
}
