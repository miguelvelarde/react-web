import React, {useState} from 'react'
import logo from './logo.svg';
import './App.css';
import axios from "axios";


function App() {

  const [query, setQuery] = useState('test');

  function doGet(){
    
    const config = window['myvar'];
    

   const headers = {
    "Content-Type": "application/json",
  };

  axios
    .get(config.apiUrl, { headers })
    .then((response) => {
      setQuery(response);
    })
    .catch((error) => {
      setQuery(error);
    });

    alert(query.data)
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
