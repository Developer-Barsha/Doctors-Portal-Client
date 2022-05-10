import React from 'react';
import './InfoCard.css'

const InfoCard = ({info}) => {
    const {name, img, description, bgClass} = info;

    return (
        <div class={`info-card card text-white lg:card-side shadow-xl px-3 ${bgClass}`}>
            <figure><img src={img} alt="Album" className='pt-4 lg:pt-0' /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default InfoCard;