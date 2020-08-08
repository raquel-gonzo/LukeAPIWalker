import React from 'react';

const Species = ({displayData}) => {    // destructured props object by passing the key of the object.
    console.log(displayData)

    return(
        <div>
            <h3>{displayData.name}</h3>
            <p>Classification: {displayData.classification} </p>
            <p>Language: {displayData.language}</p>
            <p>Average Lifespan: {displayData.average_lifespan}</p>
        </div>
    )
}

export default Species;