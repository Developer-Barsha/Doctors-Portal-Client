import React from 'react';
import './InfoCard.css'

const InfoCard = ({info}) => {
    const {name, img, description} = info;

    return (
        <div class="info-card card bg-gradient-to-r text-white to-primary from-secondary lg:card-side shadow-xl px-3">
            <figure><img src={img} alt="Album" className='pt-4 lg:pt-0' /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default InfoCard;