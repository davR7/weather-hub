import { createContext } from 'react';
import { WeatherProps } from '../../types/WeatherProps';
import { ErrorProps } from '../../types/ErrorProps';

type ContextProps = {
  weather: WeatherProps | null;
  setWeather: React.Dispatch<React.SetStateAction<WeatherProps | null>>;
  error: ErrorProps | null;
  setError: React.Dispatch<React.SetStateAction<ErrorProps | null>>;
};

export const WeatherContext = createContext<ContextProps>({
  weather: null,
  setWeather: () => {},
  error: null,
  setError: () => {},
});
