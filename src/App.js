import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
// import About from './components/About';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [Mode, setMode] = useState(false);
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
  };

  setTimeout(() => {
    setAlert(null);
  }, 2000);

  const changingMode = (newmode) => {
    setMode(newmode);
    switch (newmode) {
      case 'Dark':
        document.body.style.backgroundColor = '#042743';
        showAlert("Dark mode has been enabled", "success");
        document.title = 'TextUtils - Dark Mode';
        break;
      case 'Red':
        document.body.style.backgroundColor = '#74272E';
        showAlert("Red mode has been enabled", "success");
        document.title = 'TextUtils - Red Mode';
        break;
      case 'Yellow':
        document.body.style.backgroundColor = '#FFD700';
        showAlert("Yellow mode has been enabled", "success");
        document.title = 'TextUtils - Yellow Mode';
        break;
      case 'Green':
        document.body.style.backgroundColor = '#4CAF50';
        showAlert("Green mode has been enabled", "success");
        document.title = 'TextUtils - Green Mode';
        break;
      default:
        document.body.style.backgroundColor = 'white';
        showAlert("Light mode has been enabled", "success");
        break;
    }
  };

  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtils" Mode={Mode} showAlert={showAlert} changingMode={changingMode} />
        <Alert alert={alert} />
        <Textform showAlert={showAlert} Mode={Mode} />
        {/* <Routes> */}
          {/* <Route path="/About" element={<About />} />
          <Route path="/" element={<Textform showAlert={showAlert} Mode={Mode} />} />
        </Routes>
      </Router> */}
    </>
  );
}

export default App;
