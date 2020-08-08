import React, { useEffect, useState } from 'react';
import axios from 'axios';

const People = ({displayData}) => {    // destructured props object by passing the key of the object.
    const [homeWorld, setHomeWorld] = useState('');

    useEffect(() => {
        axios.get(`${displayData.homeworld}`)
        .then(response =>{
            setHomeWorld(response.data.name)
        })
    })

    return(
        <div>
            <h3>{displayData.name}</h3>
            <p>Home World: {homeWorld}</p>
            <p>Gender: {displayData.gender}</p>
            <p>Hair Color: {displayData.hair_color}</p>
        </div>
    )
}

export default People;