import React, { useState } from 'react';
import Footer from '../Shared/Footer';
import AppointmentBanner from './AppointmentBanner';
import AvailableAppointments from './AvailableAppointments';

const Appointment = () => {
    const today = new Date();
    const [date, setDate] = useState(today);

    return (
        <div className='px-5'>
            <AppointmentBanner date={date} setDate={setDate} />
            <AvailableAppointments date={date} />
            <Footer />
        </div>
    );
};

export default Appointment;