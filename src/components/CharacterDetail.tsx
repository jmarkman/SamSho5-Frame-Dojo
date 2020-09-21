import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom'
import { ICharacter } from './models/character';
import { IMove } from './models/move';

type UrlInfo = { character: string };


export const CharacterDetail = ({ match }: RouteComponentProps<UrlInfo>) => {
    const [charDetails, setCharDetails] = useState<ICharacter>();

    useEffect(() => {
        async function fetchCharDetails() {
            const response = await fetch(`/api/characters/complete/${match.params.character}`);

            if (response.status !== 400) {
                const charDetailJson: ICharacter = await response.json();

                setCharDetails(charDetailJson);
            }
        }

        fetchCharDetails();
    });

    const createMoveCard = (moveDetails: IMove) => {
        return (
            <div className="media">
                <div className="media-body">
                    <h5>{moveDetails.Name}</h5>
                    <p>{moveDetails.Notes}</p>
                </div>
            </div>
        );
    };

    return (
        <div>
            {charDetails?.Moves?.map(m => createMoveCard(m))}
        </div>
    );
}

export default CharacterDetail;