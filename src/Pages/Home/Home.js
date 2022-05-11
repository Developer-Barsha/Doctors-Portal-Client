import React from 'react';
import MakeAppointment from './MakeAppointment';
import Banner from './Banner/Banner';
import Exceptional from './Exceptional';
import Info from './Info/Info';
import Services from './Services';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Info/>
            <Services/>
            <Exceptional/>
            <MakeAppointment/>
            <Testimonials/>
        </div>
    );
};

export default Home;