import './App.css';
import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import MyComponent from './components/MyComponent';
import './App.css';

function App() {
  return (
    <div className="App">
    <ThemeProvider>
      <MyComponent />
    </ThemeProvider>
    </div>
  );
}

export default App;
