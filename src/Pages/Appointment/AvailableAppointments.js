import React from 'react';
import SharedBtn from './../Shared/SharedBtn'

const AvailableAppointments = () => {
    const appointments = [
        {
            id: 1,
            name: 'Teeth Orthodontics',
            time: '8:00 AM - 9:00 AM',
            seats: '12 SPACES AVAILABLE'
        },
        {
            id: 2,
            name: 'Cavity Dentistry',
            time: '10:05 am - 11:30 am',
            seats: '10 SPACES AVAILABLE'
        },
        {
            id: 3,
            name: 'Teeth Cleaning',
            time: '8:00 AM - 9:00 AM',
            seats: '8 SPACES AVAILABLE'
        },
        {
            id: 4,
            name: 'Teeth Orthodontics',
            time: '10:05 am - 11:30 am',
            seats: '10 SPACES AVAILABLE'
        },
        {
            id: 5,
            name: 'Teeth Orthodontics',
            time: '6:05 pm - 9:00 am',
            seats: '15 SPACES AVAILABLE'
        },
        {
            id: 6,
            name: 'Teeth Orthodontics',
            time: '8:00 AM - 9:00 AM',
            seats: '12 SPACES AVAILABLE'
        },
    ]

    return (
        <section>
            <h2 className="pt-10 text-secondary text-center">Available Appointments on April 30, 2022</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-6'>
                {
                    appointments.map(appointment =>
                        <div className="card text-center card-animate bg-base-100 shadow-xl" key={appointment.id}>
                            <div className="card-body justify-center">
                                <h2 className="font-bold text-2xl text-secondary">{appointment.name}</h2>
                                <p className='font-semibold'>{appointment.time}</p>
                                <p className='font-semibold'>{appointment.seats}</p>
                                <div className="card-actions justify-center">
                                    <SharedBtn name={'Book Appointment'} />
                                </div>
                            </div>
                        </div>)
                }
            </div>
        </section>
    );
};

export default AvailableAppointments;