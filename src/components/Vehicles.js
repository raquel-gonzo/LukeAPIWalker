import React from 'react';

const Vehicles = ({displayData}) => {    // destructured props object by passing the key of the object.
    console.log(displayData)

    return(
        <div>
            <h3>{displayData.name}</h3>
            <p>Passengers: {displayData.passengers} </p>
            <p>Cargo Capacity: {displayData.cargo_capacity}</p>
            <p>Vehicle Class: {displayData.vehicle_class}</p>
        </div>
    )
}

export default Vehicles;