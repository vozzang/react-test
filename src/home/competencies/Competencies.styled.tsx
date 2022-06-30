import styled from '@emotion/styled';
import { MediaQuery } from '../../shared/theme';

const StyledHomeCompetencies = styled.section`
  .competencies-content {
    display: flex;
    justify-content: space-between;

    .item {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 48%;
      padding: 30px;
      border-radius: 12px;

      &.item-front {
        background-color: #6c6ce5;
      }
      &.item-back {
        background-color: #ff4c60;
      }

      i {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 120px;
      }
      img {
        width: 100px;
      }
      h3 {
        margin-bottom: 20px;
      }
    }
  }

  ${MediaQuery.medium} {
    .competencies-content {
      flex-direction: column;

      .item {
        width: 100%;
        margin-bottom: 20px;
        padding: 20px;

        &:last-child {
          margin-bottom: 0;
        }

        i {
          height: 70px;
        }
        img {
          width: 60px;
        }
        h3 {
          font-size: 22px;
        }
      }
    }
  }
`;

export default StyledHomeCompetencies;