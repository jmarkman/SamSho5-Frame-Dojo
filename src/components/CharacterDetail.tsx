import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom'
import { ICharacter } from './models/character';
import CharacterDescription from "./CharacterDescription";
import MoveDetails from './MoveDetails';

type UrlInfo = { character: string };

export const CharacterDetail = ({ match }: RouteComponentProps<UrlInfo>) => { 
    const defaultChar: ICharacter = { Name: "thumb", Id: 0, GameplayDetails: "", Lore: "", Moves: []};
    const [charDetails, setCharDetails] = useState<ICharacter>(defaultChar);

    useEffect(() => {
        async function fetchCharDetails() {
            const response = await fetch(`/api/characters/complete/${match.params.character}`);

            if (response.status !== 400) {
                const charDetailJson: ICharacter = await response.json();

                setCharDetails(charDetailJson);
            }
        }

        fetchCharDetails();
    }, [match.params.character]);

    return (
        <div>
            <CharacterDescription character={charDetails} />
            {charDetails?.Moves?.map(m => <MoveDetails move={m} />)}
        </div>
    );
}

export default CharacterDetail;