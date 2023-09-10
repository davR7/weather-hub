import styled from 'styled-components';
import * as M from '../../styles/mixins-style';

export const ClimateSummary = styled.div`
  ${M.FlexColumn_C_XY}
`;

export const WeatherImage = styled.img`
  width: 130px;
`;

export const Temperature = styled.div`
  color: #fff;
  font-size: 3rem;
  margin-bottom: 10px;
`;

export const LocationWrap = styled.div`
  display: flex;
`;

export const Location = styled.div`
  color: #fff;
  font-size: 2rem;
  margin-right: 10px;
`;

export const ErrorMessage = styled.div`
  color: #ff6347;
  font-size: 1.2rem;
  font-weight: bolder;
  text-align: center;
  text-shadow: 1px 1px 2px #000;
  margin-top: 20px;
`;
