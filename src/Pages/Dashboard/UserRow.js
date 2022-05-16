import React from 'react';
import { toast } from 'react-toastify'

const UserRow = ({ user, refetch }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch('https://doctors-portal-server-barsha.herokuapp.com/user/admin/' + email, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if(res.status===403){
                    toast.error('Failed to make an Admin!');
                }
                return res.json()})
            .then(data => {
                if(data.modifiedCount>0){
                    refetch();
                    toast.success('Successfully made an Admin!');
                }
            })
    }

    return (
        <tr>
            <td>{user.email}</td>
            <td>{role === 'Admin' ? <button className='btn btn-secondary btn-xs'>{role}</button> : <button onClick={makeAdmin} className='btn btn-xs'>Make Admin</button>}</td>
            <td><button className='btn btn-xs bg-red-500 border-0 text-white hover:bg-red-400'>Remove User</button></td>

        </tr>
    );
};

export default UserRow;