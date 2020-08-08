import React from 'react';

const Starships = ({displayData}) => {    // destructured props object by passing the key of the object.
    console.log(displayData)

    return(
        <div>
            <h3>{displayData.name}</h3>
            <p>Starship Class: {displayData.starship_class} </p>
            <p>Hyperdrive Rating: {displayData.hyperdrive_rating}</p>
            <p>Model: {displayData.model}</p>
        </div>
    )
}

export default Starships;