import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import WineApp from './WineApp.jsx'
import 'bootstrap/dist/css/bootstrap.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';


const queryClient = new QueryClient();


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <WineApp />
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
)
