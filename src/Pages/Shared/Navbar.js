import React from 'react';
import CustomLink from './CustomLink';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Navbar = () => {
    const [user] = useAuthState(auth);
    const menuItems = <>
        <li><CustomLink to={'/'}>Home</CustomLink></li>
        <li><CustomLink to={'/services'}>Services</CustomLink></li>
        <li><CustomLink to={'/appointment'}>Appointment</CustomLink></li>
        <li><CustomLink to={'/reviews'}>Reviews</CustomLink></li>
        <li><CustomLink to={'/contact'}>Contact</CustomLink></li>
        {user && <li><CustomLink to={'/dashboard'}>Dashboard</CustomLink></li>}
        {user ? <button className='btn-sm btn btn-secondary my-auto' onClick={() => signOut(auth)}>Sign Out</button> : <li><CustomLink to={'/login'}>Login</CustomLink></li>}
    </>;

    return (
        <div className="navbar bg-base-100 px-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <a href="/" className="btn btn-ghost normal-case text-xl">Doctors Portal</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            {
                user &&
                <div className="navbar-end lg:hidden">
                    {/* <label className="btn btn-primary lg:hidden">Menu</label> */}
                    <label for="dashboard-sidebar" tabIndex="1" className="btn drawer-button btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div> 
            }
        </div>
    );
};

export default Navbar;