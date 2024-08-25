import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <Navbar title="TextUtils" isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Textform isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
    </>
  );
}

export default App;
