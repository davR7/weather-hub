import * as S from './style';
import magnifier from '../../assets/images/magnifier.png';

const SearchBar: React.FC = () => {
  return (
    <S.SearchBar>
      <S.Input />
      <S.Button>
        <img src={magnifier} alt="magnifier" />
      </S.Button>
    </S.SearchBar>
  );
};

export default SearchBar;
