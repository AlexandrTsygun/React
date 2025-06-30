import React, { useState } from 'react';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import LeftRegistrationForm from '../LeftRegistrationForm/LeftRegistrationForm';
import './RegistrationPage.scss';

const RegistrationPage = ({ initialTheme = 'light' }) => {
  const [theme, setTheme] = useState(initialTheme);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`registration-container ${theme}`}>
      <LeftRegistrationForm theme={theme} />
      <div className="right-panel">
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === 'light' ? '🌜' : '🌗'}
        </button>
        <RegistrationForm theme={theme} />
      </div>
    </div>
  );
};

export default RegistrationPage;