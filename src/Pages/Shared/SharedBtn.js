import React from 'react';

const SharedBtn = ({ name }) => {
    return (
        <button className='relative shared-button btn border-0 text-white font-bold bg-gradient-to-r to-primary from-secondary hover:text-primary'><h1>{name}</h1></button>
    );
};

export default SharedBtn;