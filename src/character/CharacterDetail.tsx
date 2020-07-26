import React from 'react';
import { RouteComponentProps } from 'react-router-dom'

type UrlInfo = { charName: string }

export const CharacterDetail = ({ match }: RouteComponentProps<UrlInfo>) => (
    <h1>Character: {match.params.charName}</h1>
)