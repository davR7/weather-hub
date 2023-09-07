import Weather from './pages/Weather';
import { WeatherProvider } from './contexts/weather/WeatherProvider';

const App: React.FC = () => {
  return (
    <WeatherProvider>
      <Weather />
    </WeatherProvider>
  );
};

export default App;
