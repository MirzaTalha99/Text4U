// import userEvent from "@testing-library/user-event";
import { useState } from "react";
// import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
// import About from "./components/About";
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [backcl, setBackCl] = useState('white')

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null)
    }, 1800);
  }

  const toggleModeDark = () =>{
    if(mode==='light'){
      setMode('dark');
      setBackCl('#525252')
      document.body.style.backgroundColor = '#525252'
      showAlert('Dark mode has been enabled', 'success')
    }
    else{
      setMode('light');
      document.body.style.backgroundColor  = 'white'
      showAlert('Light mode has been enabled', 'success')
    }
  }
  
  const toggleModeBlue = () =>{
    if(mode==='light'){
      setMode('dark');
      setBackCl('#151639')
      document.body.style.backgroundColor = '#151639'
      showAlert('Dark mode has been enabled', 'success')
    }
    else{
      setMode('light');
      document.body.style.backgroundColor  = 'white'
      showAlert('Light mode has been enabled', 'success')
    }
  }

  const toggleModeRed = () =>{
    if(mode==='light'){
      setMode('dark');
      setBackCl('#581414')
      document.body.style.backgroundColor = '#581414'
      showAlert('Dark mode has been enabled', 'success')
    }
    else{
      setMode('light');
      document.body.style.backgroundColor  = 'white'
      showAlert('Light mode has been enabled', 'success')
    }
  }

  const toggleModeGreen = () =>{
    if(mode==='light'){
      setMode('dark');
      setBackCl('#082e16')
      document.body.style.backgroundColor = '#082e16'
      showAlert('Dark mode has been enabled', 'success')
    }
    else{
      setMode('light');
      document.body.style.backgroundColor  = 'white'
      showAlert('Light mode has been enabled', 'success')
    }
  }
  return(
  <>
  {/* <Router> */}
    <Navbar title="Text4U" Home = "Home" About="About US"  mode = {mode} toggleModeDark={toggleModeDark} toggleModeRed={toggleModeRed} toggleModeBlue = {toggleModeBlue} toggleModeGreen = {toggleModeGreen}/>
    <Alert alert = {alert}/>
    <div className="container mt-3">
      {/* <Routes> */}
        {/* <Route path="/about" element={
        <About />}/> */}
        {/* <Route path='/' element={  */}
        <Textform showAlert = {showAlert} heading="Enter the Text Below" backcl = {backcl} mode = {mode}/>
        {/* // }/> */}
      {/* </Routes> */}
    </div>
  {/* </Router> */}
  </>
)};

export default App;
