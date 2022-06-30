import styled from '@emotion/styled';

const StyledHomeExperienceItem = styled.div`
  position: relative;
  padding: 0 0 0 40px;
  margin-bottom: 30px;

  &:last-child {
    margin-bottom: 0;
  }
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 21px;
    height: 21px;
    background-image: url("data:image/svg+xml,%3Csvg height='21' viewBox='0 0 21 21' width='21' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd' stroke='%23ff4c60' stroke-linecap='round' stroke-linejoin='round' transform='translate(2 4)'%3E%3Cpath d='m2.5.48528137h11c.5522847 0 1 .44771525 1 1v8.01471863h-13v-8.01471863c0-.55228475.44771525-1 1-1z'/%3E%3Cpath d='m1.11803399 9.5h13.76393201c.5522848 0 1 .44771525 1 1 0 .1552451-.0361451.3083582-.1055728.4472136l-1.2763932 2.5527864h-13l-1.2763932-2.5527864c-.24698925-.4939785-.0467649-1.09465154.44721359-1.34164079.13885544-.06942772.2919685-.10557281.4472136-.10557281z' transform='matrix(1 0 0 -1 0 23)'/%3E%3C/g%3E%3C/svg%3E");
  }
  &::after {
    content: "";
    position: absolute;
    top: 30px;
    bottom: 0;
    left: 10px;
    width: 1px;
    background: #ff4c60;
  }

  .date {
    margin-bottom: 10px;
    font-size: 14px;
    opacity: 0.5;

    a {
      color: #fff;

      &.open-in-new {
        padding-right: 24px;
        background: url('../img/icon-open-in-new.svg') no-repeat right center;
      }
    }
  }
  h3 {
    margin-bottom: 10px;
    font-size: 20px;
  }
  .text {
    line-height: 24px;
  }
  .tags {
    display: flex;
    flex-wrap: wrap;
    padding-left: 16px;

    span {
      margin: 0 10px 10px 0;
      padding: 6px 12px;
      border-radius: 20px;
      font-size: 14px;
      color: #fff;
      background: rgba(255, 255, 255, 0.1);
    }
  }
`;

export default StyledHomeExperienceItem;