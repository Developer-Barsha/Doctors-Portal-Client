import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const BookingModal = ({ treatment, date, setTreatment }) => {
    const formattedDate = format(date, 'PP');
    const {_id, name, slots} = treatment;
    const [user] = useAuthState(auth);

    const handleBooking=e=>{
        e.preventDefault();
        const email = e.target.email.value;
        const phone = e.target.phone.value;
        const slot = e.target.slot.value;

        const booking = {
            treatmentId: _id,
            treatment: name,
            date : formattedDate,
            slot: slot,
            patient: email,
            patientname: user?.displayName,
            phone : phone,
        }

        fetch('http://localhost:5000/booking', {
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.success){
                toast.success(`Appointment booked! on ${formattedDate} at ${slot}`);
            }            
            if(!data.success){
                toast.error(`Already an appointment on ${data.booking.date} at ${data.booking.slot}`);
            }            
            // to close the modal
            setTreatment(null)
        })
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg mb-4">Booking For : <span className='text-secondary font-bold'>{name}</span></h3>

                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-4'>
                        <input type="text" className='w-full outline-none rounded p-2 py-1 bg-slate-200' value={formattedDate} required/>
                        <select name='slot' className="select select-bordered w-full" required>
                            {slots.map((slot, index)=><option key={index} value={slot}>{slot}</option>)}
                        </select>
                        <input type="text" name='name' value={user?.displayName || ''} className='w-full rounded p-2 py-1 outline-none border-2' disabled required/>
                        <input type="email" name='email' className='w-full rounded p-2 py-1 outline-none border-2' value={user?.email || ''} disabled required/>
                        <input type="number" name='phone' className='w-full rounded p-2 py-1 outline-none border-2' placeholder={'Phone Number'} required/>
                        <input type="submit" className='w-full text-white btn p-0' value={'Book Appointment'} required/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;