import React from 'react';
import SharedBtn from './../Shared/SharedBtn';

const Contact = () => {
    return (
        <div class="hero-content bg-appointment-bg flex-col lg:flex-row-reverse">
            <div class="card flex-shrink-0 w-full max-w-sm">
            <h1 className="pt-8 font-bold text-secondary text-center uppercase">Contact Us</h1>
            <h1 className="text-3xl text-white  text-center font-bold">Stay Connected With Us</h1>
                <div class="card-body gap-3">
                    <div class="form-control">
                        <input type="text" placeholder="Your Email" class="input input-bordered" />
                    </div>
                    <div class="form-control">
                        <input type="text" placeholder="Subject" class="input input-bordered" />
                    </div>
                    <div class="form-control">
                        <textarea type="text" rows={4} placeholder="Your Message" class=" resize-none rounded-lg outline-none px-4 py-2" />
                    </div>
                    <div class="form-control">
                        <SharedBtn name={'Submit'}></SharedBtn>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;