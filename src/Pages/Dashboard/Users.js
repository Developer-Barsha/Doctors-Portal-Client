import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import Loading from './../Shared/Loading';
import UserRow from './UserRow';

const Users = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    const {data : users, isLoading, refetch} = useQuery('users', ()=>fetch('https://doctors-portal-server-barsha.herokuapp.com/user', {
        method:'GET',
        headers:{
            authorization:`Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res=>res.json()));
    if(isLoading){
        return <Loading/>
    }
// https://cdn.dribbble.com/users/669537/screenshots/5821620/dribbble-clip800x600_2.gif
    return (
        <div>
            <h1 className="text-3xl">All Users</h1>
            {
                !users?.length > 0 ?
                <div className='mx-auto w-full'>
                    <img src="https://cdn.dribbble.com/users/220043/screenshots/6288970/dttr_loaderricerca_ac_ver1.gif" className='w-full mx-auto lg:w-1/2 ' alt="" />
                    <h1 className='text-3xl text-center text-secondary'>You don't have any appointments</h1>
                </div> :

            <div className="overflow-x-auto">

                {admin ? <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { users?.length>0 &&
                            users?.map(user =>
                                <UserRow key={user._id} user={user} refetch={refetch}>
                                </UserRow>
                            )
                        }
                    </tbody>
                </table> :
                <img src='https://cdn.dribbble.com/users/669537/screenshots/5821620/dribbble-clip800x600_2.gif' className='lg:w-1/2 w-full mx-auto' alt=''/>}

            </div>
            }
        </div>
    );
};

export default Users;