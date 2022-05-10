import React from 'react';
import avatar1 from './../../assets/images/people1.png'
import avatar2 from './../../assets/images/people2.png'
import avatar3 from './../../assets/images/people3.png'

const Testimonials = () => {
    const testimonials = [
        { id: 1, img: avatar1, name: 'Gary Will', description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content" },
        { id: 2, img: avatar2, name: 'Jack Smith', description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content" },
        { id: 3, img: avatar3, name: 'Willson Herry', description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content" },
    ]

    return (
        <section>
            <h1 className="pt-8 font-bold text-secondary uppercase">OUR Testimonials</h1>
            <h1 className="text-4xl font-bold">Testimonials We Got</h1>
            <div className='grid sm:grid-cols-1 px-8 md:grid-cols-2 lg:grid-cols-3 gap-4 py-4 text-center'>
                {
                    testimonials.map(testimonial => 
                        <div>

                        </div>)
                }
            </div>
        </section>
    );
};

export default Testimonials;