import styled from '@emotion/styled';

const StyledHomeCertifyItem = styled.a`
  position: relative;
  width: 120px;
  margin: 0 1rem 1rem 0;
  padding: 0.8rem;
  background: #1ba94c;
  color: #fff;
  text-decoration: none;
  box-shadow: -6px 6px 10px 0 rgb(0 0 0 / 20%);

  &::before {
    content: "";
    display: block;
    width: 26px;
    height: 26px;
    margin-bottom: 1rem;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%23ffffffff' class='bi bi-award' viewBox='0 0 16 16'%3E%3Cpath d='M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z'/%3E%3Cpath d='M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-size: 100% auto;
  }
  .corner {
    position: absolute;
    top: 0;
    right: 0;
    overflow: hidden;
    padding-top: 25%;
    width: 25%;
    height: 0;
    background-color: #353353;
    box-shadow: rgb(53 51 83) 3px -3px 0px 3px, rgb(0 0 0 / 25%) -4px 4px 6px;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #32c766;
      transform: rotate(45deg) scale(1.5) translateY(50%);
    }
  }
`;

export default StyledHomeCertifyItem;