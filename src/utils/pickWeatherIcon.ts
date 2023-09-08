import clear_icon from '../assets/images/clear.png';
import cloud_icon from '../assets/images/cloud.png';
import drizzle_icon from '../assets/images/drizzle.png';
import rain_icon from '../assets/images/rain.png';
import snow_icon from '../assets/images/snow.png';

export const pickWeatherIcon = (icon: string) => {
  const icons = {
    [clear_icon]: ['01d', '01n'],
    [cloud_icon]: ['02d', '02n'],
    [drizzle_icon]: ['03d', '03n', '04d', '04n'],
    [rain_icon]: ['09d', '09n', '10d', '10n'],
    [snow_icon]: ['13d', '13n'],
  };

  const values = Object.entries(icons).find(arr => arr[1].some(iconName => iconName === icon));
  const imgPath = values?.[0] || clear_icon;
  return imgPath;
};
