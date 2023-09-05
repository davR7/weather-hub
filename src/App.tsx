import { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Home from './pages/Weather';

function App() {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
}

export default App;
