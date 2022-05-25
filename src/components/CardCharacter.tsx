import React from "react"

function CardCharacter({ character, i }: any) {

    return (
        <div key={i} className="col text-center">
            <img className="card-img-top" src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt="" />
            <div className="shadow p-3 mb-5  card-info">
                <div className="card-body">
                    <h5 className="card-title text-white">{character.name}</h5>
                    {
                        character.description !== "" &&
                        <div className="acordion acordion-flush" id={`accordionFlush${i}`}>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id={`flush-heading${i}`}>
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${i}`} aria-expanded="false" aria-controls={`flush-collapse${i}`}>
                                        Description
                                    </button>
                                </h2>

                                <div id={`flush-collapse${i}`} className="accordion-collapse collapse" aria-labelledby={`flush-heading${i}`} data-bs-parent={`#accordionFlush${i}`}>
                                    <div className="accordion-body">
                                        <p className="card-text">{character.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }

                </div>
            </div>
        </div>
    );

}

export default CardCharacter;