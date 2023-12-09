import { createContext, useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode);
  }, [isDarkMode]);

  const theme = {
    isDarkMode,
    toggleDarkMode,
  };

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

// Add PropTypes validation for children
ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
