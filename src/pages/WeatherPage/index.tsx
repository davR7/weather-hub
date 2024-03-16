import * as S from './style';
import { screenResolution } from '../../utils';
import ClimateDetails from '../../components/ClimateDetails';
import ClimateSummary from '../../components/ClimateSummary';
import SearchBar from '../../components/SearchBar';
import { useWeather } from '../../hooks';

const WeatherPage: React.FC = () => {
  const { VITE_API_UNSPLASH } = import.meta.env;
  const { weather } = useWeather();

  return (
    <S.Container $url={`${VITE_API_UNSPLASH}/${screenResolution()}/?`} $city={weather?.name}>
      <S.WeatherScreen>
        <SearchBar />
        <ClimateSummary />
        <ClimateDetails />
      </S.WeatherScreen>
    </S.Container>
  );
};

export default WeatherPage;
