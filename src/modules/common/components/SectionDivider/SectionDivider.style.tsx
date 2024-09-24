import styled from 'styled-components';

import { type DividerProps, type SeparatorProps } from './section-divider';

export const Divider = styled.div<DividerProps>`
  width: 100%;
  margin-bottom: ${({ gap = 0 }) => gap}px;

  ${({ theme }) => theme.media.sm`
    margin-bottom: ${({ gap = 0, mobileGap = 0 }) => mobileGap || gap}px;
  `}
`;

export const Separator = styled.hr<SeparatorProps>`
  margin: 0;
  border: 0;
  border-bottom: 1px solid ${({ borderColor }) => borderColor};
`;
