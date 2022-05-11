import React from 'react';
import whitening from './../../assets/images/whitening.png';
import cavity from './../../assets/images/cavity.png';
import fluoride from './../../assets/images/fluoride.png';
import ServiceCard from './ServiceCard';

const Services = () => {
    const services = [
        { id: 1, img: fluoride, name: 'Fluoride Treatment', description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the" },
        { id: 2, img: cavity, name: 'Cavity Filling', description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the" },
        { id: 3, img: whitening, name: 'Teeth Whitening', description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the" },
    ]

    return (
        <section>
            <h1 className="pt-8 font-bold text-center text-secondary">OUR SERVICES</h1>
            <h1 className="text-4xl font-bold text-center">Services We Provide</h1>
            <div className='grid sm:grid-cols-1 px-8 md:grid-cols-2 lg:grid-cols-3 gap-4 py-4 text-center'>
                {
                    services.map(service => <ServiceCard key={service.id} service={service} />)
                }
            </div>
        </section>
    );
};

export default Services;