import React from 'react'

function Tile({ recipe }) {
    return (
        <div>

            <div class="col-md-4">
                <div class="card p-3 mb-2">
                    <div class="d-flex justify-content-between">
                        <div class="d-flex flex-row align-items-center">
                            <div class="ms-2 c-details">
                                <h6 class="mb-0">{recipe["recipe"]["label"]}</h6>
                            </div>
                        </div>
                        <div class="badge"> <span></span> </div>
                    </div>
                    <div class="">
                        <div class="mt-2">
                            <img src={recipe["recipe"]["image"]} class="card-img-top" alt=""/>
                            <div class="buttons"> <button>Save</button> <button>Buy</button> </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Tile
