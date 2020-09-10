import React from 'react';
import { RouteComponentProps } from 'react-router-dom'

type UrlInfo = { character: string }

export const CharacterDetail = ({ match }: RouteComponentProps<UrlInfo>) => (
    <h1>Character: {match.params.character}</h1>
);

export default CharacterDetail;