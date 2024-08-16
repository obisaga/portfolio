import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';  // Import BrowserRouter
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>   {/* Obudowanie aplikacji w BrowserRouter */}
      <App />
    </BrowserRouter>
  </StrictMode>,
);
