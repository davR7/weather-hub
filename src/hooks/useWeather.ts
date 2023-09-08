import { useContext } from 'react';
import { WeatherContext } from '../contexts/weather/WeatherContext';

export const useWeather = () => {
  const weather = useContext(WeatherContext);
  return weather;
};
