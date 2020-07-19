import React from 'react';
import { SearchIcon } from './Icons'

export const Header = () => (
    <div>
        <a href="./">Samurai Shodown Frame Dojo</a>
        <SearchIcon />
        <input type="input" placeholder="Look for a specific character" />
    </div>
)