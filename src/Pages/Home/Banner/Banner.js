import React from 'react';
import chair from './../../../assets/images/chair.png';
import './Banner.css'

const Banner = () => {
    return (
        <section>
            <div className='banner py-6 flex items-center justify-between px-5 lg:flex-row-reverse'>
                <div>
                    <img src={chair} alt="" />
                </div>
                <div>
                    <h1 className='text-5xl font-bold mb-4'>Your New Smile Starts Here</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <button className='btn btn-primary border-0 text-white font-bold mt-4 bg-gradient-to-r to-primary from-secondary'>GET STARTED</button>
                </div>
            </div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${chair})` }}>
            <div className="hero-content flex-col lg:flex-row-reverse px-12">
                <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt=''/>
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
                </div>
            </div>
        </div>
        </section>
    );
};

export default Banner;