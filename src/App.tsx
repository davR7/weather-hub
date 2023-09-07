import { useState } from 'react';
import Weather from './pages/Weather';
import { QueryClient, QueryClientProvider } from 'react-query';

const App: React.FC = () => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Weather />
    </QueryClientProvider>
  );
};

export default App;
