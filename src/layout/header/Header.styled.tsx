import styled from '@emotion/styled';
import { MediaQuery } from '../../shared/theme';

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 290px;
  height: 100vh;
  border-right: 1px solid rgba(255,255,255,0.1);
  display: flex;
  align-items: center;
  z-index: 11;

  nav {
    width: 100%;
  }

  ${MediaQuery.medium} {
    display: none;
  }
`;