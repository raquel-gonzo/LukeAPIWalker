import React from 'react';

const Films = ({displayData}) => {    // destructured props object by passing the key of the object.
    console.log(displayData)

    return(
        <div>
            <h3>{displayData.title}</h3>
            <p>Director: {displayData.director} </p>
            <p>Release Date: {displayData.release_date}</p>
            <p>Producer: {displayData.producer}</p>
        </div>
    )
}

export default Films;