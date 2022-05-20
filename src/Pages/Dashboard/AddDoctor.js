import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from './../Shared/Loading'

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const { data: services, isLoading } = useQuery('services', () => fetch('http://localhost:5000/service').then(res => res.json()));

    if (isLoading) {
        return <Loading />
    }

    // 3 ways to store images 
    //  1. Third Party storage // free open public storage is okay for practice
    //  2. Your own storage in your own server (file system)
    //  3. Database : Mongodb
    /* 
    YUP: to validate file | search: Yup file validation for react hook form
    */

    const imageStorageKey = '199143de73f5f40cc474cdaff7d24f8f';

    const onSubmit = async data => {
        const image = data?.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    console.log('imgbb', img);
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        speciality: data.speciality,
                        img: img,
                    }

                    // send to your database
                    fetch('http://localhost:5000/doctor', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if(inserted.insertedId){
                                toast.success('Doctor added successfully!');
                                reset();
                            }
                            else{
                                toast.error('Failed to add the Doctor!');
                            }
                        })
                }
            });
    }

    return (
        <div>
            <h1 className="text-2xl text-secondary text-center pt-5 pb-2 font-bold">Add a New Doctor</h1>
            <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-1 lg:w-1/2 w-full mx-auto items-center'>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>

                    <input
                        type="text"
                        placeholder="Your Name"
                        className="input input-bordered w-full"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is required'
                            },
                            minLength: {
                                value: 3,
                                message: 'Name Too Short'
                            }
                        })}
                    />

                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                        {errors.name?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>

                    <input
                        type="email"
                        placeholder="Your Email"
                        className="input input-bordered w-full"
                        {...register("email", {
                            required: {
                                value: true,
                                message: 'Email is required'
                            },
                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: 'Invalid Email'
                            }
                        })}
                    />

                    <label className="label">
                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Speciality</span>
                    </label>

                    <select {...register("speciality")} className="select select-bordered w-full mb-4">
                        {services.map(s => <option key={s?._id} value={s.name}>{s?.name}</option>)}
                    </select>

                    <label className="label">
                        {errors.speciality?.type === 'required' && <span className="label-text-alt text-red-500">{errors.speciality.message}</span>}
                    </label>
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>

                    <input
                        type="file"
                        placeholder="Doctors Photo"
                        className="input input-bordered w-full p-1"
                        {...register("image", {
                            required: {
                                value: true,
                                message: 'image is required'
                            }
                        })}
                    />

                    <label className="label">
                        {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}
                    </label>
                </div>
                <input type="submit" className='w-full text-white btn' value={'Add'} />
            </form>
        </div>
    );
};

export default AddDoctor;