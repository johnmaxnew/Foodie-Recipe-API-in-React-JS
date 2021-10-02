import React from 'react'

function Tile({ recipe }) {
    return (
        <div>
            <img src={recipe["recipe"]["image"]} alt=""/>
            <p>{recipe["recipe"]["label"]}</p>
        </div>
    )
}

export default Tile
