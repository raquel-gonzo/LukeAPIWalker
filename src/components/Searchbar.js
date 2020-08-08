import React, {useState } from 'react';
import { Link } from '@reach/router';

const Searchbar = (props) => {

    const [selected, setSelected] = useState('films');
    const handleSelect = (event) => {
        setSelected(event.target.value.toLowerCase())
    }

    const [number, setNumber] = useState(1);
    const handleNumber = (e) => {
        setNumber(e.target.value)
    }

    return(
        <div>
            <label>Search for: </label>
            <select id="select" name="select" onChange={handleSelect}>
                <option>Films</option>  
                <option>People</option>
                <option>Planets</option>
                <option>Species</option>
                <option>Starships</option>
                <option>Vehicles</option>
            </select>

            <label>ID: </label>
            <input type="number" value={number} onChange={handleNumber}></input>

            <button onClick={() => props.handleClick(selected, number)}>Search</button>
        </div>
    );
};

export default Searchbar;