import React, { useState } from "react";
import { ICharacter } from "./models/character";
import "./CharacterDescription.css"

const CharacterDescription = ({ character }: { character: ICharacter }) => {

    const [blurbType, setBlurbType] = useState(0);

    return (
        <div>
            <div className="card flex-md-row mb-4 box-shadow h-md-250">
                <img className="card-img-left flex-auto d-none d-md-block characterCardThumbnail" alt="Thumbnail" src={require(`../media/portraits/${character.Name.toLowerCase()}.png`)}/>
                <div className="card-body d-flex flex-column align-items-start">
                    <h3 className="mb-0">
                        {character?.Name}
                    </h3>
                    <hr className="my-2"/>
                    <div className="btn-group mr-2">
                        <button type="button" className="btn btn-sm btn-outline-primary shadow-none" onClick={() => setBlurbType(0)}>Gameplay Details</button>
                        <button type="button" className="btn btn-sm btn-outline-primary shadow-none" onClick={() => setBlurbType(1)}>Character Lore</button>
                    </div>
                    <hr className="my-2"/>
                    <p className="card-text mb-auto characterBlurb">{ (blurbType === 0) ? character?.GameplayDetails : character?.Lore}</p>
                </div>
            </div>
        </div>
    );
}

export default CharacterDescription;