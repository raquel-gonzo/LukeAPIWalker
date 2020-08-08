import React from 'react';

const People = ({displayData}) => {    // destructured props object by passing the key of the object.
    console.log(displayData)

    return(
        <div>
            <h3>{displayData.name}</h3>
            <p>Home World: {displayData.homeworld} </p>
            <p>Gender: {displayData.gender}</p>
            <p>Hair Color: {displayData.hair_color}</p>
        </div>
    )
}

export default People;