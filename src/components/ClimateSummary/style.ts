import styled from 'styled-components';
import { FlexColumn_C_XY } from '../../styles/mixins-style';

export const ClimateSummary = styled.div`
  ${FlexColumn_C_XY}
  img {
    width: 150px;
  }
`;

export const Temperature = styled.div`
  color: #fff;
  font-size: 3rem;
`;

export const Location = styled.div`
  color: #fff;
  font-size: 3rem;
`;
