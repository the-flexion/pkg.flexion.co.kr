import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import '../reset.scss';
import '../pkg.scss';
import './styles/font-family.scss'; // custom path
import './styles/icon.scss'; // custom path

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
