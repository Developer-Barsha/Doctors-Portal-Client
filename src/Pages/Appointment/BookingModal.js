import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, date, setTreatment }) => {
    const theDate = format(date, 'PP');
    const {_id, name, slots} = treatment;

    const handleBooking=e=>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const phone = e.target.phone.value;
        const slot = e.target.slot.value;

        setTreatment(null)
        console.log(_id, name, email, phone, slot);
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg mb-4">Booking For : <span className='text-secondary font-bold'>{name}</span></h3>

                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-4'>
                        <input type="text" className='w-full outline-none rounded p-2 py-1 bg-slate-200' value={theDate} />
                        <select name='slot' className="select select-bordered w-full">
                            {slots.map(slot=><option value={slot}>{slot}</option>)}
                        </select>
                        <input type="text" name='name' className='w-full rounded p-2 py-1 outline-none border-2' placeholder={'Full Name'} />
                        <input type="number" name='phone' className='w-full rounded p-2 py-1 outline-none border-2' placeholder={'Phone Number'} />
                        <input type="email" name='email' className='w-full rounded p-2 py-1 outline-none border-2' placeholder={'Email'} />
                        <input type="submit" className='w-full text-white btn p-0' value={'Submit'} />
                    </form>

                    {/* <div className="modal-action">
                        <label for="booking-modal" className="btn">Yay!</label>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default BookingModal;