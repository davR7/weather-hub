import * as S from './style';
import humidity from '../../assets/images/humidity.png';
import wind from '../../assets/images/wind.png';
import { useWeather } from '../../hooks/useWeather';

const ClimateDetails: React.FC = () => {
  const { weather } = useWeather();

  return (
    weather && (
      <S.ClimateDetails>
        <S.Condition>
          <S.Img src={humidity} alt="humidity" />
          <S.Wrap>
            <S.Value>{weather?.main.humidity}%</S.Value>
            <S.Label>Humidade</S.Label>
          </S.Wrap>
        </S.Condition>
        <S.Condition>
          <S.Img src={wind} alt="wind" />
          <S.Wrap>
            <S.Value>{Math.round(weather?.wind.speed)} km/h</S.Value>
            <S.Label>Vento</S.Label>
          </S.Wrap>
        </S.Condition>
      </S.ClimateDetails>
    )
  );
};

export default ClimateDetails;
