import React, {useState} from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DoctorRow from './DoctorRow';
import DeleteConfirmModal from './DeleteConfirmModal'

const ManageDoctors = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null);
    const { data: doctors, isLoading, refetch } = useQuery('doctors', () => fetch('http://localhost:5000/doctor', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => res.json()));
    if (isLoading) {
        return <Loading />
    }

    return (
        <div>
            <h1 className="text-3xl">My doctors</h1>
            <div className="overflow-x-auto">

                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Speciality</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {doctors?.length > 0 &&
                            doctors?.map((doctor, index) =>
                                <DoctorRow doctor={doctor} refetch={refetch} index={index} key={doctor._id} setDeletingDoctor={setDeletingDoctor} />
                            )
                        }
                    </tbody>
                </table>
            </div>
            {   deletingDoctor && 
            <DeleteConfirmModal deletingDoctor={deletingDoctor} refetch={refetch} setDeletingDoctor={setDeletingDoctor}/>
            }
        </div>
    );
}

export default ManageDoctors;