import React, { useState} from 'react';
import './App.css';
import { Router, navigate} from '@reach/router';
import axios from 'axios';

import Searchbar from './components/Searchbar';
import Planets from './components/Planets';
import Films from './components/Films';
import People from './components/People';
import Species from './components/Species';
import Starships from './components/Starships';
import Vehicles from './components/Vehicles';
import Error from './components/Error';


function App() {

  const [displayData, setDisplayData] = useState('');
  // const [selected, setSelected] = useState('');
  // const [number, setNumber] = useState('');

  const handleClick = (selected, number) => {
    // setSelected(selected);
    // setNumber(number);
    axios.get(`http://swapi.dev/api/${selected}/${number}`)
      .then(response => {
        setDisplayData(response);
        navigate(`/${selected}/${number}`);
      }).catch(err => {
        console.log("error " + err);
        navigate(`/error`);
      })
  }

  return (
    <div className="App">
      <Searchbar handleClick={handleClick} />
      <Router>
        <Films path="/films/:number" displayData={displayData}/>
        <People path="/people/:number" displayData={displayData}/>
        <Planets path="/planets/:number" displayData={displayData}/>
        <Species path="/species/:number" displayData={displayData}/>
        <Starships path="/starships/:number" displayData={displayData}/>
        <Vehicles path="/vehicles/:number" displayData={displayData}/>
        <Error path="/error" />
      </Router>
    </div>
  );
}

export default App;
