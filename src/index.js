import React from 'react';
import ReactDOM from 'react-dom/client'; // Importa desde 'react-dom/client'
import App from './App';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme/theme';
import './config/i18n';

// Obtén el contenedor 'root' del DOM
const rootElement = document.getElementById('root');

// Crea el root usando createRoot
const root = ReactDOM.createRoot(rootElement);

// Renderiza la app usando createRoot
root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
