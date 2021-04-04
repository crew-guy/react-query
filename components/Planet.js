import React from 'react'

const Planet = ({planet}) => {
    return (
        <div className="card">
            <h3>{planet.name} </h3>
            <p>population : {planet.population} </p>
            <p>Climate : {planet.climate} </p>
        </div>
    )
}

export default Planet
