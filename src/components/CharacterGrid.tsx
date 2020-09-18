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

    const generateRows = () => {
        let startSliceIndex = 0;
        let endSliceIndex = 4;
        let cardDecks: JSX.Element[] = [];

        while (endSliceIndex <= charNames.length) {
            let segment = charNames.slice(startSliceIndex, endSliceIndex);
            let row = createRow(segment);

            cardDecks.push(row);

            startSliceIndex += 4;
            endSliceIndex += 4;
        }

        return cardDecks;
    }

    const createRow = (charactersForRow: string[]) => {
        return (
            <div className="card-deck">
                {charactersForRow.map(c => <CharacterPortrait character={c} />)}
            </div>
        );
    }

    return(
        <div>
            {generateRows()}
        </div>
    );
}

export default CharacterGrid;