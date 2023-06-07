
import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import Alert from './Components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  
  const [alert, setalert] = useState(null);

  const showalert=(message,type)=>{
    setalert({msg:message,
    type : type
  })
  setTimeout(() => {
    setalert(null)
  }, 1500);
    }

    const [mode, setmode] = useState('light');

  const togglemode = () => {
    if (mode === "light") {
      setmode("dark")
      document.body.style.background = '#042743'
      showalert("Dark mode is invoked","success");
      document.title= 'Textutils- DarkMode'
    }
    else {
      setmode("light")
      document.body.style.background = 'white'
      showalert("Light mode is invoked","success");
      document.title= 'Textutils- LightMode'
    }
  }
  return (
    <>
      <Navbar title="TextUtils" abouttext="About" mode={mode} togglemode={togglemode} />
      <Alert alert={alert}/>
        {/* <Textform showalert={showalert} heading="Enter Your Text to analysis" mode={mode} /> */}
        
      <div className="container">

    
        <Router>

        <Routes>
          			<Route exact path="/about" element={<About/>} />
          			<Route exact path="/" element={<Textform showalert={showalert} heading="TextUtils - Word & Character Counter & Conversions of Text" mode={mode}/>}/>
        		</Routes>
        </Router>
        
      </div>
    </>
  );
}
export default App;
