import React from 'react';
import { toast } from 'react-toastify'

const DoctorRow = ({ doctor, index, refetch, setDeletingDoctor}) => {
    const { name, email, img, speciality } = doctor;

    return (
        <tr>
            <td className='font-bold'>{1 + index}</td>
            <td>
                <div className="avatar">
                    <div className="w-8 rounded border hover:scale-105">
                        <img src={img} alt={name} />
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>{speciality}</td>
            <td>
                <label onClick={()=>setDeletingDoctor(doctor)} htmlFor="delete-confirm-modal" className="btn modal-button">open modal</label>
            </td>
        </tr>
    );
};

export default DoctorRow;