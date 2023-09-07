import * as S from './style';
import cloud from '../../assets/images/cloud.png';
import TimeStamp from '../TimeStamp';

const ClimateSummary: React.FC = () => {
  return (
    <S.ClimateSummary>
      <img src={cloud} alt="clud" />
      <S.Temperature>24°</S.Temperature>
      <TimeStamp />
      <S.Location>London</S.Location>
    </S.ClimateSummary>
  );
};

export default ClimateSummary;
