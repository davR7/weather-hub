import * as S from './style';
import magnifier from '../../assets/images/magnifier.png';
import { WeatherProps } from '../../types/WeatherProps';
import { useApi, useWeather } from '../../hooks';
import { useState } from 'react';

type SearchProps = {
  [key: string]: FormDataEntryValue;
};

const SearchBar: React.FC = () => {
  const { VITE_API_KEY } = import.meta.env;
  const [cityInput, setCityInput] = useState('');
  const { setWeather, setError } = useWeather();
  const api = useApi();

  const handlerInput = ({ target }: React.ChangeEvent<HTMLInputElement>) => setCityInput(target.value);

  const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!cityInput) return;
    
    const formData = new FormData(e.currentTarget);
    const { city }: SearchProps = Object.fromEntries(formData);

    api
      .findWeather<WeatherProps>(`/weather?q=${city}&units=Metric&APPID=${VITE_API_KEY}&lang=pt_br`)
      .then(res => {
        setWeather(res.data);
        setError(res.error);
      })
      .catch(err => {
        setWeather(err.data);
        setError(err.error);
      })
      .finally(() => setCityInput(''));
  };

  return (
    <S.SearchBar onSubmit={handlerSubmit}>
      <S.Input type="text" name="city" value={cityInput} placeholder="Informe a cidade..." onChange={handlerInput} />
      <S.Button>
        <img src={magnifier} alt="magnifier" />
      </S.Button>
    </S.SearchBar>
  );
};

export default SearchBar;
