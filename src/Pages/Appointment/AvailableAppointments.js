import React, { useState } from 'react';
import { format } from 'date-fns';
import Service from './Service';
import BookingModal from './BookingModal';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const AvailableAppointments = ({ date }) => {
    const formattedDate = format(date, 'PP');
    const [treatment, setTreatment] = useState(null);

    const { data: services, isLoading, refetch } = useQuery(['available', formattedDate], () =>
        fetch('https://doctors-portal-server-barsha.herokuapp.com/available?date=' + formattedDate)
            .then(res => res.json())
    )

    if (isLoading) {
        return <Loading />
    }

    // const [services, setServices] = useState([]);
    // useEffect(() => {
    //     fetch('https://doctors-portal-server-barsha.herokuapp.com/available?date='+formattedDate)
    //         .then(res => res.json())
    //         .then(data => setServices(data))
    // }, [formattedDate])

    return (
        <section>
            <h2 className="pt-10 text-secondary text-center">Available Appointments on {formattedDate}</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-6'>
                {
                    services?.map(service =>
                        <Service
                            key={service._id}
                            service={service}
                            setTreatment={setTreatment}
                        />)
                }
                {treatment &&
                    <BookingModal
                        date={date}
                        treatment={treatment}
                        setTreatment={setTreatment}
                        refetch={refetch}
                    />}
            </div>
        </section >
    );
};

export default AvailableAppointments;