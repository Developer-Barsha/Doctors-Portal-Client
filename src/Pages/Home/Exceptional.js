import React from 'react';
import SharedBtn from '../Shared/SharedBtn';
import exceptional from './../../assets/images/treatment.png'

const Exceptional = () => {
    return (
        <div className="hero min-h-screen overflow-hidden">
            <div className="hero-content flex-col py-5 px-8 lg:flex-row gap-8 lg:gap-16">
                <img src={exceptional} className="lg:max-w-lg rounded-lg ease-in-out duration-300 hover:shadow-2xl" alt=''/>
                <div>
                    <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <SharedBtn name={'Get Started'}/>
                </div>
            </div>
        </div>
    );
};

export default Exceptional;