import React, {useEffect} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Loading from './Loading';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';

const Social = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let signInErrorMessage;
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';
    const [token] = useToken(gUser);

    useEffect(()=>{
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, from, navigate])

    if (gLoading) {
        return <Loading />
    }
    if (gError) {
        signInErrorMessage = <p className='text-red-500 pb-2'>{gError.message}</p>;
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle();
    }

    return (
        <div className=' flex justify-center items-center'>
            {signInErrorMessage}
            <button onClick={() => handleGoogleSignIn()} className='btn btn-outline btn-accent w-full'>Continue With Google</button>
        </div>
    );
};

export default Social;