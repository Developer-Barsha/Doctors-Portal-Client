import React from 'react';
import InfoCard from './InfoCard/InfoCard';
import clock from './../../../assets/icons/clock.svg';
import marker from './../../../assets/icons/marker.svg';
import phone from './../../../assets/icons/phone.svg';

const Info = () => {
    const infos=[
        {id:1, img:clock, name:'Opening Hours', description:"Lorem Ipsum is simply dummy text of the pri"},
        {id:2, img: marker, name:'Visit Our Location', description:"Brooklyn, NY 10036, United States"},
        {id:3, img:phone, name:'Contact Us Now', description:"+000 123 456789"}
    ]

    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 py-5 px-5'>
            {
                infos.map(info=><InfoCard info={info} />)
            }
        </div>
    );
};

export default Info;