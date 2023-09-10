import clear_sky_d from '../assets/images/clear-sky-day.svg';
import clear_sky_n from '../assets/images/clear-sky-night.svg';
import few_clouds_d from '../assets/images/few-clouds-day.svg';
import few_clouds_n from '../assets/images/few-clouds-night.svg';
import clouds from '../assets/images/clouds.svg';
import broken_clouds from '../assets/images/broken-clouds.svg';
import shower_rain from '../assets/images/shower-rain.svg';
import rain_d from '../assets/images/day-rain.svg';
import rain_n from '../assets/images/night-rain.svg';
import thunderstorm from '../assets/images/thunderstorm.svg';
import snow from '../assets/images/snow.svg';
import mist from '../assets/images/mist.svg';
import not_found from '../assets/images/not-found.svg';

export const pickWeatherIcon = (icon: string) => {
  const icons = {
    [clear_sky_d]: ['01d'],
    [clear_sky_n]: ['01n'],
    [few_clouds_d]: ['02d'],
    [few_clouds_n]: ['02n'],
    [clouds]: ['03d', '03n'],
    [broken_clouds]: ['04d', '04n'],
    [shower_rain]: ['09d', '09n'],
    [rain_d]: ['10d'],
    [rain_n]: ['10n'],
    [thunderstorm]: ['11d', '11n'],
    [snow]: ['13d', '13n'],
    [mist]: ['50d', '50n'],
  };

  const values = Object.entries(icons).find(arr => arr[1].some(iconName => iconName === icon));
  const imgPath = values?.[0] || not_found;
  return imgPath;
};
