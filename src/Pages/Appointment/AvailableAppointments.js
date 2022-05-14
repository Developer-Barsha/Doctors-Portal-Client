import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import Service from './Service';
import BookingModal from './BookingModal';

const AvailableAppointments = ({ date }) => {
    const formattedDate = format(date, 'PP');
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/available?date='+formattedDate)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [formattedDate])

    return (
        <section>
            <h2 className="pt-10 text-secondary text-center">Available Appointments on {formattedDate}</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-6'>
                {
                    services.map(service =>
                        <Service
                            key={service._id}
                            service={service}
                            setTreatment={setTreatment}
                        />)
                }
            {treatment && <BookingModal date={date} treatment={treatment} setTreatment={setTreatment} />}
            </div>
        </section >
    );
};

export default AvailableAppointments;