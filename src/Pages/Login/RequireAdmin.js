import {useLocation, Navigate} from 'react-router-dom';
import {useAuthState} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from './../Shared/Loading'
import useAdmin from '../../hooks/useAdmin';
import { signOut } from 'firebase/auth';

const RequireAdmin = ({ children }) =>{
    const location = useLocation();
    const [user, loading] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user); 

    if(adminLoading || loading){
        return <Loading />
    }
      
    if (!admin || !user) {
        signOut(auth);
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
      
    return children;
}

export default RequireAdmin;