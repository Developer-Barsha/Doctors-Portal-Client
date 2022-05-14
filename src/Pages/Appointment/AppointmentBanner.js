import React from 'react';
import chair from './../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const css = `
  .my-selected{ 
    font-weight: bold; 
    border: 2px solid #0FCFEC;
    color: #0FCFEC;
  }
    .my-selected:hover:not([disabled]) { 
    border-color: #19D3AE;
    color: #19D3AE;
  }
  .my-today { 
    font-weight: bold;
    font-size: 140%; 
    color: #0FCFEC;
  }
`;


const AppointmentBanner = ({date, setDate}) => {
    return (
        <div className="hero py-5 lg:px-0 bg-banner-bg m-0">
            <div className="hero-content flex-col gap-10 m-0 lg:flex-row-reverse">
                <img src={chair} className="lg:max-w-lg sm:max-w-sm rounded-lg ease-in-out duration-300 hover:shadow-2xl" alt='Dentist Chair'/>
                <div className='rounded-lg shadow-2xl p-3 m-0 bg-white'>
                    <style>{css}</style>
                    <DayPicker
                        mode="single"
                        selected={date}
                        modifiersClassNames={{
                            selected: 'my-selected',
                            today: 'my-today'
                        }}
                        onSelect={setDate} />

                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;