import * as S from './style';
import ClimateDetails from '../../components/ClimateDetails';
import ClimateSummary from '../../components/ClimateSummary';
import SearchBar from '../../components/SearchBar';

const WeatherPage: React.FC = () => {
  return (
    <S.Container>
      <S.WeatherScreen>
        <SearchBar />
        <ClimateSummary />
        <ClimateDetails />
      </S.WeatherScreen>
    </S.Container>
  );
};

export default WeatherPage;
