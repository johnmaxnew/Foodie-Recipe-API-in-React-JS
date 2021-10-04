import React from 'react'

function Card({ recipe }) {
    return (

        <div class="col-lg-3 col-md-6 mb-4 mb-lg-0 mt-3">
            <div class="card rounded shadow-sm border-0">
                <div class="card-body p-0">
                    <div class="bg-primary px-5 py-4 text-center card-img-top">
                        <img src={recipe["recipe"]["image"]} alt="..." width="200" class="rounded-circle mb-2 img-thumbnail d-block mx-auto"/>
                    </div>
                    <div class="px-5 py-4 text-center">
                        <h5 class="mb-0">{recipe["recipe"]["label"]}</h5>
                        <p class="small text-muted">CEO - Consultant</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Card
