import styled from '@emotion/styled';
import { MediaQuery } from '../../shared/theme';

const Main = styled.main`
  margin-left: 290px;

  ${MediaQuery.medium} {
    margin-left: 0;
  }
`;

export default Main;