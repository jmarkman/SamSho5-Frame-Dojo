import React from "react";
import './CharacterPortrait.css'
import {Link} from 'react-router-dom'

export const CharacterPortrait = ({character}: {character: string}) => (
    <figure>
        <Link to={`/${character}`}>
            <img src={require(`../media/portraits/${character}.png`)} alt="" height="178" width="218" />
        </Link>
            <figcaption>{toNameCase(character)}</figcaption>
    </figure>
)

const toNameCase = (name: string) => {
    let trimmedName: string = name.substring(1, name.length);
    let firstLetter: string = name.charAt(0).toUpperCase();
    return firstLetter + trimmedName;
};

export default CharacterPortrait;