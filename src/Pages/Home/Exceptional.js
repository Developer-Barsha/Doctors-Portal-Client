import React from 'react';
import exceptional from './../../assets/images/treatment.png'

const Exceptional = () => {
    return (
        <div class="hero min-h-screen px-8">
            <div class="hero-content flex-col lg:flex-row gap-8 lg:gap-16">
                <img src={exceptional} class="max-w-sm rounded-lg shadow-2xl" alt=''/>
                <div>
                    <h1 class="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p class="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button className='my-button btn btn-primary border-0 text-white font-bold bg-gradient-to-r to-primary from-secondary'>GET STARTED</button>
                </div>
            </div>
        </div>
    );
};

export default Exceptional;