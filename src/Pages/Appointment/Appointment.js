import React from 'react';
import AppointmentBanner from './AppointmentBanner';
import AvailableAppointments from './AvailableAppointments';

const Appointment = () => {
    return (
        <div className='px-5'>
            <AppointmentBanner/>
            <AvailableAppointments/>
        </div>
    );
};

export default Appointment;