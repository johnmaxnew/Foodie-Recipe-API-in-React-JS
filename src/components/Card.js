import React from 'react'

function Card({ recipe }) {
    return (

        <div className="col-lg-3 col-md-6 mb-4 mb-lg-0 mt-3">
            <div className="card rounded shadow-sm border-0">
                <div className="card-body p-0" onClick={() => {window.open(recipe["recipe"]["url"])}}>
                    <div className="bg-primary px-5 py-4 text-center card-img-top">
                        <img src={recipe["recipe"]["image"]} alt="..." width="200" className="rounded-circle img-thumbnail d-block mx-auto"/>
                    </div>
                    <div className="px-5 py-4 text-center">
                        <h5 className="mb-0">{recipe["recipe"]["label"]}</h5>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Card
