import React from 'react';

const Planets = ({displayData}) => {    // destructured props object by passing the key of the object.
    console.log(displayData)

    return(
        <div>
            <h3>{displayData.name}</h3>
            <p>Climate: {displayData.climate} </p>
            <p>Terrain: {displayData.terrain}</p>
            <p>Surface Water: {displayData.surface_water}%</p>
            <p>Population: {displayData.population}</p>
        </div>
    )
}

export default Planets;