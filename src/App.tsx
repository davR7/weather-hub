import WeatherPage from './pages/WeatherPage';
import { WeatherProvider } from './contexts/weather/WeatherProvider';

const App: React.FC = () => {
  return (
    <WeatherProvider>
      <WeatherPage />
    </WeatherProvider>
  );
};

export default App;
