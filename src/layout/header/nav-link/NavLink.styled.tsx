import styled from '@emotion/styled';

export const StyledNavLink = styled.a`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px 20px;
  color: #fff;
  text-decoration: none;
  line-height: 1;
  font-weight: bold;
  transition: all ease 0.2s;

  i {
    width: 30px;
  }
  &:hover {
    color: #ffd15c;
  }
  &.active {
    color: #ffd15c;
  }
`;