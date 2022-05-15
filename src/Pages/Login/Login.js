import React, { useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import Social from '../Shared/Social';

const Login = () => {
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';
    const emailRef = useRef('');

    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    }, [user])

    let signInErrorMessage;

    if (loading) {
        return <Loading />
    }
    if (error || resetError) {
        signInErrorMessage = <p className='text-red-500 pb-2'>{error.message || resetError?.message}</p>;
    }
    const onSubmit = data => {
        const email = data.email;
        const password = data.password;
        signInWithEmailAndPassword(email, password);
    }

    return (
        <div className='lg:w-1/2 w-full md:w-3/4 p-8 mx-auto'>
            <div className="card bg-base-100 shadow-xl my-5">
                <div className="card-body">
                    <h1 className="text-3xl text-secondary pb-5">Please Login</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-1'>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name='email'
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
                        <input type="submit" className='w-full text-white btn' value={'Login'} />
                        <p className='text-center pt-3'>Not Registered? <Link to={'/register'} className='text-secondary'>Register Here</Link></p>
                        <p className='text-center pt-3'>Forgot Password? <button onClick={() => {
                            // await sendPasswordResetEmail(emailRef);
                            // alert('Sent email');
                            console.log('email', emailRef.current);
                        }} className='text-secondary'>Reset Password</button></p>
                    </form>
                    <div className="divider">OR</div>
                    {/* Social here */}
                    <Social />
                </div>
            </div>
        </div>
    );
};

export default Login;