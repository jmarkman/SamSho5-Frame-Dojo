import React from 'react';
import CharacterPortrait from "./CharacterPortrait";

const charNames: string[] = [
    'amakusa', 'basara', 'charlotte', 'enja','gaira', 'galford', 'gaoh', 'genjuro', 'hanzo'
]

export const CharacterGrid = () => (
    <div className="container">
        {charNames.map(c => <CharacterPortrait character={c} />)}
    </div>
)
