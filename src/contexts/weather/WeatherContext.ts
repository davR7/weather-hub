import { createContext } from 'react';
import { WeatherProps } from '../../types/WeatherProps';

export type ContextProps = {
  weather: WeatherProps | null;
  setWeather: React.Dispatch<React.SetStateAction<WeatherProps | null>>;
};

export const WeatherContext = createContext<ContextProps | null>(null);
