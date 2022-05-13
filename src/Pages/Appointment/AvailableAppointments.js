import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import Service from './Service';
import BookingModal from './BookingModal';

const AvailableAppointments = ({ date }) => {
    const selectedDate = date ? date : new Date();
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <section>
            <h2 className="pt-10 text-secondary text-center">Available Appointments on {format(selectedDate, 'PP')}</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-6'>
                {
                    services.map(service =>
                        <Service
                            key={service._id}
                            service={service}
                            setTreatment={setTreatment}
                        />)
                }
            {treatment && <BookingModal date={selectedDate} treatment={treatment} setTreatment={setTreatment} />}
            </div>
        </section >
    );
};

export default AvailableAppointments;