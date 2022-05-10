import React from 'react';
import InfoCard from './InfoCard/InfoCard';
import clock from './../../../assets/icons/clock.svg';
import marker from './../../../assets/icons/marker.svg';
import phone from './../../../assets/icons/phone.svg';

const Info = () => {
    const infos=[
        {id:1, img:clock, name:'Opening Hours', description:"Lorem Ipsum is simply dummy text of the pri", bgClass:"bg-gradient-to-r to-primary from-secondary"},
        {id:2, img: marker, name:'Visit Our Location', description:"Brooklyn, NY 10036, United States", bgClass:"bg-gradient-to-r to-accent from-neutral"},
        {id:3, img:phone, name:'Contact Us Now', description:"+000 123 456789", bgClass:"bg-gradient-to-r to-primary from-secondary"}
    ]

    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 py-5 px-8'>
            {
                infos.map(info=><InfoCard key={info.id} info={info} />)
            }
        </div>
    );
};

export default Info;