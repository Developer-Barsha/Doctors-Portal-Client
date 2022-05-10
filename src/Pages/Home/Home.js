import React from 'react';
import Banner from './Banner/Banner';
import Exceptional from './Exceptional';
import Info from './Info/Info';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Info/>
            <Services/>
            <Exceptional/>
        </div>
    );
};

export default Home;