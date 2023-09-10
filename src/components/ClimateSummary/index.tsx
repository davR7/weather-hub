import * as S from './style';
import TimeStamp from '../TimeStamp';
import { useWeather } from '../../hooks/useWeather';
import { pickWeatherIcon } from '../../utils';
import CountryFlag from '../CountryFlag';

const ClimateSummary: React.FC = () => {
  const { weather, error } = useWeather();

  return !error && weather ? (
    <S.ClimateSummary>
      <S.WeatherImage src={pickWeatherIcon(weather.weather[0].icon)} alt="weather icon" />
      <S.Temperature>{Math.round(weather.main.temp)}°</S.Temperature>
      <TimeStamp timezone={weather.timezone} />
      <S.LocationWrap>
        <S.Location>{weather.name}</S.Location>
        <CountryFlag country={weather.sys.country} style="shiny" size={32} />
      </S.LocationWrap>
    </S.ClimateSummary>
  ) : (
    <S.ErrorMessage>{error?.clientMessage}</S.ErrorMessage>
  );
};

export default ClimateSummary;
