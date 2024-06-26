import styled from 'styled-components';
import * as M from '../../styles/mixins-style';

export const Container = styled.div`
  background-image: url('/weather-bg.jpg');
  background-color: #333;
  padding: 15px;
  height: 100vh;
  @media (min-width: 731px) {
    ${M.FlexRow_C_XY}
  }
`;

export const WeatherScreen = styled.div`
  background: #42f48c;
  background: -webkit-linear-gradient(to right, #42f48c, #373b44);
  background: linear-gradient(to right, #42f48c, #373b44);
  border-radius: 20px;
  padding: 40px;

  @media (min-width: 731px) {
    width: 360px;
  }
`;
