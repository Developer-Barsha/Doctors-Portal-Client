import React from 'react';
import avatar1 from './../../assets/images/people1.png'
import avatar2 from './../../assets/images/people2.png'
import avatar3 from './../../assets/images/people3.png'

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            img: avatar1,
            name: 'Gary Will',
            address: "London, UK",
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
        },
        {
            id: 2,
            img: avatar2,
            name: 'Annie Rose',
            address: "Los Angeles, US",
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
        },
        {
            id: 3,
            img: avatar3,
            name: 'Weather',
            address: "London, UK",
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
        },
    ]

    return (
        <section className='px-8 bg-testimonial-bg bg-no-repeat' style={{backgroundSize:'15%', backgroundPositionX:'95%'}}>
            <h1 className="pt-8 font-bold text-secondary uppercase">Testimonial</h1>
            <h1 className="text-4xl font-bold">What Our Patients Says</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-4 pt-10'>
                {
                    testimonials.map(testimonial =>
                        <div key={testimonial.id} class="card card-animate pt-5 px-5 bg-base-100 shadow-2xl">
                            <p>{testimonial.description}</p>
                            <div class="card-body flex-row py-6 gap-5 items-center">
                                <figure>
                                    <div class="rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                                        <img src={testimonial.img} alt='' />
                                    </div>
                                </figure>
                                <div>
                                    <h2 class="card-title">{testimonial.name}</h2>
                                    <h2>{testimonial.address}</h2>
                                </div>
                            </div>
                        </div>)
                }
            </div>
        </section>
    );
};

export default Testimonials;