import styled from 'styled-components';
import themeData from 'utils/theme/themeData';

const { typography } = themeData;

export const NotFoundImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 56px);
  height: 100%;
`;

export const NotFoundImg = styled.img`
  width: 350px;
`;

export const NotFoundTitle = styled(typography.H1BoldTypography)`
  margin: 0;
`;

export const NotFoundSubTitle = styled(typography.P1BoldTypography)`
  margin: 0;
`;
