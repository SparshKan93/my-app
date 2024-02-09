import React,{ useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Error from './components/Error';
import Alert from './components/Alert';
// import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


function App() {
  const [mode,setMode] = useState('light');
  // const [mode1,setMode1] = useState('light');
  const[alert,setAlert] = useState(null);
  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }
  const toggleMode = ()=>{
    if(mode==='dark'){
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Lightmode has been enabled","success")
      // setInterval(() => {
      //   document.title='textutils-darkmode'
      // }, 2000);
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Darkmode has been enabled","success")
    }
  }
  return (
      <>
      <Router>
      <Navbar title="TextUtils" mode={mode} t={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <Routes>
          {/* <Route path="/" element={<Layout />}/> */}
          
          <Route exact path="/" element={ <TextForm showAlert={showAlert} heading="Enter your text below" mode={mode}/>}/>
          <Route exact path="/about" element={ <About mode={mode} />}/> 
          <Route path="*" element={ <Error/> }/>
          
       </Routes>
      </div>
      
      </Router>
      
      </>
    );
    }
  
    export default App;
