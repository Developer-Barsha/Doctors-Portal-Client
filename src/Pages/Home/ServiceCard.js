import React from 'react';

const ServiceCard = ({service}) => {
    const {name, img, description} = service;

    return (
        <div>
            <div className={`card-animate card text-black shadow-xl px-3 bg-white`}>
            <figure><img src={img} alt="Album" className='pt-5' /></figure>
            <div className="card-body">
                <h2 className="text-2xl font-bold">{name}</h2>
                <p>{description}</p>
            </div>
        </div>
        </div>
    );
};

export default ServiceCard;