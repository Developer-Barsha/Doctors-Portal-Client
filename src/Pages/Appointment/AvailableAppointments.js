import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';

const AvailableAppointments = ({ date }) => {
    const selectedDate = date ? date : new Date();
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <section>
            <h2 className="pt-10 text-secondary text-center">Available Appointments on {format(selectedDate, 'PP')}</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-6'>
                {
                    services.map(appointment =>
                        <div className="card text-center card-animate bg-base-100 shadow-xl" key={appointment?._id}>
                            <div className="card-body justify-center">
                                <h2 className="font-bold text-2xl text-secondary">{appointment?.name}</h2>
                                <p className='font-semibold'>{appointment?.slots.length > 0 ? appointment?.slots[0] : <span className='text-gray-400'>Try Another Date</span>}</p>
                                <p className='font-semibold'>{appointment?.slots.length} {appointment?.slots.length > 1 ? 'Spaces' : 'Space'} Available</p>
                                <div className="card-actions justify-center">
                                    <button disabled={appointment.slots.length===0} className={'relative shared-button btn btn-primary border-0 text-white font-bold bg-gradient-to-r to-primary from-secondary hover:text-primary'}><h1>Book Appointment</h1></button>
                                </div>
                            </div>
                        </div>)
                }
            </div>
        </section>
    );
};

export default AvailableAppointments;