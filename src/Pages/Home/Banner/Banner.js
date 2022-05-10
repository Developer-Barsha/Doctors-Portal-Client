import React from 'react';
import banner from './../../../assets/images/chair.png';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner flex items-center justify-between px-5'>
            <div>
                <h1 className='text-4xl font-bold mb-4'>Your New Smile Starts Here</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                <button className='btn mt-4'>GET STARTED</button>
            </div>
            <div>
                <img src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;