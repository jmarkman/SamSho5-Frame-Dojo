import React from "react";
import './CharacterPortrait.css'
import {Link} from 'react-router-dom'

export const CharacterPortrait = ({character}: {character: string}) => {

    const toNameCase = (name: string) => {
        let trimmedName: string = name.substring(1, name.length);
        let firstLetter: string = name.charAt(0).toUpperCase();
        return firstLetter + trimmedName;
    };
    
    return (
        <div className="card mb-4 characterCard">
            <Link to={`/${character}`}>
                <img className="card-img-top" src={require(`../media/portraits/${character}.png`)} alt={`${character}`} />
            </Link>
            <div className="card-footer">
                <Link to={`/${character}`}>
                    <p>{toNameCase(character)}</p>
                </Link>
            </div>
        </div>
    );
}

export default CharacterPortrait;