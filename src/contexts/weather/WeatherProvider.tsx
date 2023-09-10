import { useState } from 'react';
import { WeatherContext } from './WeatherContext';
import { WeatherProps } from '../../types/WeatherProps';
import { useApi } from '../../hooks';
import { ErrorProps } from '../../types/ErrorProps';

type ProviderProps = {
  children: React.ReactNode;
};

export const WeatherProvider: React.FC<ProviderProps> = ({ children }) => {
  const [weather, setWeather] = useState<WeatherProps | null>(null);
  const [error, setError] = useState<ErrorProps | null>(null);
  const { VITE_API_INIT_URL, VITE_API_KEY } = import.meta.env;
  const api = useApi();

  if (!weather && !error) {
    api
      .findWeather<WeatherProps>(`${VITE_API_INIT_URL}&APPID=${VITE_API_KEY}&lang=pt_br`)
      .then(res => {
        setWeather(res.data);
        setError(res.error);
      })
      .catch(err => {
        setWeather(err.data);
        setError(err);
      });
  }

  return <WeatherContext.Provider value={{ weather, setWeather, error, setError }}>{children}</WeatherContext.Provider>;
};
