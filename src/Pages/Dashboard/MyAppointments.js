import { signOut } from 'firebase/auth';
import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom';
import auth from './../../firebase.init';

const MyAppointments = () => {
    const [appointments, setAppointments] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (user) {
            fetch(`https://doctors-portal-server-barsha.herokuapp.com/booking?patient=${user?.email}`, {
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    if(res.status===401 || res.status===403){
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        return navigate('/')
                    }
                    return res.json()
                })
                .then(data => setAppointments(data))
        }
    }, [user, navigate])

    return (
        <div>
            <h1 className="text-3xl">My appointments</h1>
            {
                !appointments?.length > 0 ?
                <div className='mx-auto w-full'>
                    <img src="https://cdn.dribbble.com/users/220043/screenshots/6288970/dttr_loaderricerca_ac_ver1.gif" className='w-full mx-auto lg:w-1/2 ' alt="" />
                    <h1 className='text-3xl text-center text-secondary'>You don't have any appointments</h1>
                </div> :

            <div className="overflow-x-auto">

                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Treatment</th>
                        </tr>
                    </thead>
                    <tbody>
                        { appointments?.length>0 &&
                            appointments?.map((appointment, index) =>
                                <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>{appointment.patient}</td>
                                    <td>{appointment.date}</td>
                                    <td>{appointment.slot}</td>
                                    <td>{appointment.treatment}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>

            </div>
            }
        </div>
    );
};

export default MyAppointments;