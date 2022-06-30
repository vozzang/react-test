import styled from '@emotion/styled';
import { MediaQuery } from '../../shared/theme';

const StyledHomeEducation = styled.section`
  .education-timeline {
    padding: 40px 35px;
    background: rgba(0,0,0,0.2);
    border-radius: 12px;
  }

  ${MediaQuery.medium} {
    .education-timeline {
      padding: 20px 15px;
    }
  }

  @media print {
    .education {
      page-break-before: always;
    }
  }
`;

export default StyledHomeEducation;