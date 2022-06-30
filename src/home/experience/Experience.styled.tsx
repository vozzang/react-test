import styled from '@emotion/styled';
import { MediaQuery } from '../../shared/theme';

const StyledHomeExperience = styled.section`
  .experience-timeline {
    padding: 40px 35px;
    background: rgba(0,0,0,0.2);
    border-radius: 12px;
  }

  ${MediaQuery.medium} {
    .experience-timeline {
      padding: 20px 15px;
    }
  }

  @media print {
    .experience {
      page-break-before: always;
    }
  }
`;

export default StyledHomeExperience;