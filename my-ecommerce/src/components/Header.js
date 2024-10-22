import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header>
      <h1>E-commerce</h1>
      <button onClick={toggleTheme}>
        Cambiar a {theme === 'light' ? 'Oscuro' : 'Claro'}
      </button>
    </header>
  );
};

export default Header;
