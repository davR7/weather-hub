import * as S from './style';
import humidity from '../../assets/images/humidity.png';
import wind from '../../assets/images/wind.png';

const ClimateDetails: React.FC = () => {
  return (
    <S.ClimateDetails>
      <S.Condition>
        <S.Img src={humidity} alt="humidity" />
        <S.Wrap>
          <S.Value>64%</S.Value>
          <S.Label>Humidity</S.Label>
        </S.Wrap>
      </S.Condition>
      <S.Condition>
        <S.Img src={wind} alt="wind" />
        <S.Wrap>
          <S.Value>18 km/h</S.Value>
          <S.Label>Wind Speed</S.Label>
        </S.Wrap>
      </S.Condition>
    </S.ClimateDetails>
  );
};

export default ClimateDetails;
