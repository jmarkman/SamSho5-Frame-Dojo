import React from 'react';
import CharacterPortrait from "./CharacterPortrait";
import { ICharacter } from './character';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CharacterDetail } from './CharacterDetail';

const charNames: ICharacter[] = [
    {name: 'amakusa'}, { name:'basara'}, {name: 'charlotte'}, 
    {name: 'enja'}, {name: 'gaira'}, {name: 'galford'},
    {name: 'gaoh'}, {name: 'genjuro'}, {name: 'hanzo'}
]

export const CharacterGrid = () => (
    <Router>
        <Switch>
            <Route path="/:character" exact component={CharacterDetail} />
        </Switch>

        <div className="container">
            {charNames.map(c => <CharacterPortrait {...c} />)}
        </div>
    </Router>
)
