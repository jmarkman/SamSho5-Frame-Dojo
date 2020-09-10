import React, { useState, useEffect } from 'react';
import CharacterPortrait from "./CharacterPortrait";
import { ICharacter } from './models/character';

export const CharacterGrid = () => {

    const [charNames, setCharNames] = useState<string[]>([]);

    useEffect(() => {
        async function fetchCharNames() {
            const response = await fetch("/api/characters");

            if (response.status !== 400) {
                const charsAsJson: ICharacter[] = await response.json();
                const charNames: string[] = [];

                charsAsJson.forEach(element => charNames.push(element.Name.toLowerCase()));
                setCharNames(charNames);
            }
        }

        fetchCharNames();
    }, [charNames]);

    return(
        <div>
            <div className="row justify-content-center">
                <div className="col-lg-10">
                    {charNames.map(c => <CharacterPortrait character={c} />)}
                </div>
            </div>
        </div>
    );
}

export default CharacterGrid;