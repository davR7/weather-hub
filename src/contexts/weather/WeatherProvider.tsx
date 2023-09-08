import { useState } from 'react';
import { WeatherContext } from './WeatherContext';
import { WeatherProps } from '../../types/WeatherProps';
import { useApi } from '../../hooks/useApi';

type ProviderProps = {
  children: React.ReactNode;
};

export const WeatherProvider: React.FC<ProviderProps> = ({ children }) => {
  const [weather, setWeather] = useState<WeatherProps | null>(null);
  const { VITE_API_INIT_URL } = import.meta.env;
  const api = useApi();

  if (!weather) {
    api.findWeather<WeatherProps>(VITE_API_INIT_URL).then(data => setWeather(data));
  }

  return <WeatherContext.Provider value={{ weather, setWeather }}>{children}</WeatherContext.Provider>;
};
