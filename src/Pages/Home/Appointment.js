import React from 'react';
import appointment from './../../assets/images/doctor-small.png'

const Appointment = () => {
    return (
        <div class="hero min-h-screen py-5 text-white">
            <div class="hero-content flex-col lg:flex-row bg-appointment-bg gap-8 lg:gap-16">
                <img src={appointment} class="max-w-sm scale-125 -mt-16 pb-6" alt='' />
                <div>
                    <h1 class="text-xl font-bold pb-2 text-secondary">Appointment</h1>
                    <h1 class="text-3xl font-bold">Make an Appointment Today</h1>
                    <p class="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button className='my-button btn btn-primary border-0 text-white font-bold bg-gradient-to-r to-primary from-secondary'>GET STARTED</button>
                </div>
            </div>
        </div>
    );
};

export default Appointment;