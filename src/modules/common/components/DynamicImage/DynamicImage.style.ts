import styled from 'styled-components';

import { StyledImageProps } from './dynamic-image';

export const StyledImage = styled.img<StyledImageProps>`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  object-fit: cover;

  ${({ extendStyle }) => extendStyle || ''}
`;
