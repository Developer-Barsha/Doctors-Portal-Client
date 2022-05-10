import React from 'react';

const ServiceCard = ({service}) => {
    const {name, img, description} = service;

    return (
        <div>
            <div class={`info-card card text-black shadow-xl px-3 bg-white`}>
            <figure><img src={img} alt="Album" className='pt-5' /></figure>
            <div class="card-body">
                <h2 class="text-2xl font-bold">{name}</h2>
                <p>{description}</p>
            </div>
        </div>
        </div>
    );
};

export default ServiceCard;