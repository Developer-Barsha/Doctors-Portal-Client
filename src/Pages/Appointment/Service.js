import React from 'react';

const Service = ({service, setTreatment}) => {
    const {name, slots} = service;

    return (
        <div className="card text-center card-animate bg-base-100 shadow-xl">
            <div className="card-body justify-center">
                <h2 className="font-bold text-2xl text-secondary hover:text-primary">{name}</h2>
                <p className='font-semibold'>{slots.length > 0 ? slots[0] : <span className='text-gray-400'>Try Another Date</span>}</p>
                <p className='font-semibold'>{slots.length} {slots.length > 1 ? 'Spaces' : 'Space'} Available</p>
                <div className="card-actions justify-center">
                    <label 
                    htmlFor="booking-modal" onClick={()=>setTreatment(service)} disabled={slots.length === 0} className={'shared-button btn btn-secondary border-0 text-white font-bold hover:text-primary'}><h1>Book service</h1></label>
                </div>
            </div>
        </div>
    );
};

export default Service;