import * as S from './style';
import ClimateDetails from '../../components/ClimateDetails';
import ClimateSummary from '../../components/ClimateSummary';
import SearchBar from '../../components/SearchBar';

function Weather() {
  return (
    <S.Container>
      <S.Wheather>
        <SearchBar />
        <ClimateSummary />
        <ClimateDetails />
      </S.Wheather>
    </S.Container>
  );
}

export default Weather;
