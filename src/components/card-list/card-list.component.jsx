import React from 'react';

import { Card } from '../card/card.component'

import './card-list.styles.css';

let counter = 0;
export const CardList = props => (
    <div className='card-list'>
        {props.digimonList.map(digimon => (
            <Card key={counter++} digimon={digimon} />
        ))}
    </div>
);