import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Loading from './../Shared/Loading';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51L1OENEltALjRpnEVtkASdFYFBCLnVtJMgLqocDqywWhxtfQGa5mxPWJGWtgnhtiU2eeB0t2kmeQs6MW692q3ZRY00TOmB2VPx');

const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/booking/${id}`;

    const { data: appointment, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading />
    }

    return (
        <div>
            <div className="card max-w-md w-50 shadow-xl my-12 mx-auto">
                <div className="card-body">
                    <p className='text-primary font-bold'>Hello : {appointment?.patientname}</p>
                    <h2 className="card-title">Pay for: <span className='text-primary'>{appointment?.treatment}</span></h2>
                    <p>Appointment: <span className='text-secondary'>{appointment?.date}</span> at <span className='text-secondary'>{appointment?.slot}</span></p>
                    <p>Please pay: <span className='text-primary'>${appointment?.price}</span></p>
                </div>
            </div>
            <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl my-12 mx-auto">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;