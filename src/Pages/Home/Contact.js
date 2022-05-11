import React from 'react';
import SharedBtn from './../Shared/SharedBtn';

const Contact = () => {
    return (
        <div className="hero-content bg-appointment-bg flex-col lg:flex-row-reverse">
            <div className="card flex-shrink-0 w-full max-w-sm">
            <h1 className="pt-8 font-bold text-secondary text-center uppercase">Contact Us</h1>
            <h1 className="text-3xl text-white  text-center font-bold">Stay Connected With Us</h1>
                <div className="card-body gap-3">
                    <div className="form-control">
                        <input type="text" placeholder="Your Email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <input type="text" placeholder="Subject" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <textarea type="text" rows={4} placeholder="Your Message" className=" resize-none rounded-lg outline-none px-4 py-2" />
                    </div>
                    <div className="form-control">
                        <SharedBtn name={'Submit'}></SharedBtn>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;