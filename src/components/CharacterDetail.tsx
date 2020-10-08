import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom'
import { ICharacter } from './models/character';
import CharacterDescription from "./CharacterDescription";
import MoveDetails from './MoveDetails';
import "./CharacterDetail.css"

type UrlInfo = { character: string };

export const CharacterDetail = ({ match }: RouteComponentProps<UrlInfo>) => {
    const defaultChar: ICharacter = { Name: "thumb", Id: 0, GameplayDetails: "", Lore: "", Moves: [] };
    const [charDetails, setCharDetails] = useState<ICharacter>(defaultChar);
    const [searchValue, setSearchValue] = useState<string>("");

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
        <div className="container">
            <CharacterDescription character={charDetails} />
            <form className="form-inline mt-2 mt-md-0">
                <input className="form-control mr-sm-2" type="text" value={searchValue} placeholder="Search by move name..." aria-label="Search Moves" onChange={e => setSearchValue(e.target.value)} />
                <button className="btn bg-transparent shadow-none clearInputBtn" type="button" onClick={e => { e.preventDefault(); setSearchValue(""); }}>
                    <i className="fa fa-times"/>
                </button>
            </form>
            {charDetails.Moves?.filter(item => {
                if (!searchValue) {
                    return true;
                }

                if (item.Name.toLowerCase().includes(searchValue.toLowerCase())) {
                    return true;
                }
            }).map(m => <MoveDetails move={m} characterName={charDetails.Name} />)}
        </div>
    );
}

export default CharacterDetail;