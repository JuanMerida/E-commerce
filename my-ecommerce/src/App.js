import './App.css';
import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import HomePage from './pages/HomePage'; // Pantalla principal

function App() {
  return (
    <ThemeProvider>
      <HomePage />
    </ThemeProvider>
  );
}

export default App;

