import React, {useEffect} from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import Social from '../Shared/Social';
import { updateProfile } from 'firebase/auth';

const Register = () => {
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();
    let signInErrorMessage;
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    useEffect(()=>{
        if (user) {
            navigate(from, {replace:true});
        }      
    }, [user])

    if (user) {
        navigate('/');
    }
    if (loading) {
        return <Loading />
    }
    if (error) {
        signInErrorMessage = <p className='text-red-500 pb-2'>{error.message}</p>;
    }

    const onSubmit = async data => {
        const name = data.name;
        const email = data.email;
        const password = data.password;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({displayName: name});

        if (user) {
            navigate('/appointment');
        }
    }

    return (
        <div className='lg:w-1/2 w-full md:w-3/4 p-8 mx-auto'>
            <div className="card bg-base-100 shadow-xl my-5">
                <div className="card-body">
                    <h1 className="text-3xl text-secondary pb-5">Create Account</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-1'>
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
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or longer'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>
                        {signInErrorMessage}
                        <input type="submit" className='w-full text-white btn' value={'Sign up'} />
                        <p className='text-center pt-2'>Already Registered? <Link to={'/login'} className='text-secondary'>Login Here</Link></p>
                    </form>
                    <div className="divider">OR</div>
                    <Social />
                </div>
            </div>
        </div>
    );
};

export default Register;