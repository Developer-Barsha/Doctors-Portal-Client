import React from 'react';
import MakeAppointment from './MakeAppointment';
import Banner from './Banner/Banner';
import Exceptional from './Exceptional';
import Info from './Info/Info';
import Services from './Services';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Footer from '../Shared/Footer';

const Home = () => {
    return (
        <div>
            <Banner />
            <Info />
            <Services />
            <Exceptional />
            <MakeAppointment />
            <Testimonials />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;