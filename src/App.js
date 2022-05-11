import React, {useState} from 'react'
import logo from './logo.svg';
import './App.css';
import axios from "axios";
import configuracion from "./configuracion.json"

function App() {

  const [query, setQuery] = useState('test');

  function doGet(){
    const api = configuracion.SERVER_URL;

  const headers = {
    "Content-Type": "application/json",
  };

  axios
    .get(api, { headers })
    .then((response) => {
      setQuery(response);
    })
    .catch((error) => {
      setQuery(error);
    });

    alert(JSON.stringify(query))
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button className='btn alert' onClick={doGet}>Test Get</button>
      </header>
    </div>
  );
}


export default App;
