import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import Searchbar from './components/Searchbar';
import Display from './components/Display';

function App() {

  const handleClick = (selected, number) => {
    fetch(`https://swapi.dev/api/${selected}/${number}`)
    .then(response => {
      return response.json();
    }).then(response => {
      console.log(response);
    }).catch(err=>{
      console.log(err)
    })
  }

  return (
    <div className="App">
        <Searchbar handleClick={handleClick}/>
        <Display/>
    </div>
  );
}

export default App;
