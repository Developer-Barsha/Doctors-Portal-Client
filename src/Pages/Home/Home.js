import React from 'react';
import Appointment from './Appointment';
import Banner from './Banner/Banner';
import Exceptional from './Exceptional';
import Info from './Info/Info';
import Services from './Services/Services';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Info/>
            <Services/>
            <Exceptional/>
            <Appointment/>
            <Testimonials/>
        </div>
    );
};

export default Home;