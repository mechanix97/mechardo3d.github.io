//import logo from './logo.svg';
import './App.css';

 import React from "react";
 //import ReactDOM from "react-dom";
import StartBar from "./startbar.js"

function App() {
  return (
    <div className= 'background-blue' style={{  height: '100vh' }}> 
 
      <StartBar />

      <div className= 'texto'>
        Sitio en Construcción
      </div>
         
    </div> 	 
  );
}

export default App;

