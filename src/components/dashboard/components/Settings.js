import React from 'react';
import { useDarkMode } from '../../../hooks/useDarkMode';
import { Container } from '../styles';

function Settings() {
  const [darkMode, setDarkMode] = useDarkMode(false);

  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  
  return (
    <Container> 
      <div className="dark-mode__toggle" style={{marginTop: '200px'}}>
        <div onClick={toggleMode} className={darkMode ? 'toggle toggled' : 'toggle'}/>
      </div>
    </Container>
  );
}

export default Settings;