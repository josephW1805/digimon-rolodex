import React from "react";

import './card.styles.css'

export const Card = props => (
    <div className='card-container'>
        <img alt="digimon"
             src={`https://digimon.shadowsmith.com/img/${props.digimon.name.toLowerCase()}.jpg`}
        />
        <h2> {props.digimon.name} </h2>
        <p> {props.digimon.level} </p>
    </div>
);