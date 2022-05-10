import React from 'react';
import chair from './../../../assets/images/chair.png';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner bg-banner-bg bg-left-bottom bg-no-repeat ease-in-out duration-300 backdrop-blur-sm bg-contain py-6 px-8 flex items-center justify-between lg:flex-row-reverse'>
            <div>
                <img src={chair} className='rounded hover:shadow-2xl ease-in-out duration-300  hover:scale-105' alt="" />
            </div>
            <div>
                <h1 className='text-5xl font-bold mb-4'>Your New Smile Starts Here</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                <button className='my-button btn btn-primary border-0 text-white font-bold mt-4 bg-gradient-to-r to-primary from-secondary'>GET STARTED</button>
            </div>
        </div>
    );
};

export default Banner;