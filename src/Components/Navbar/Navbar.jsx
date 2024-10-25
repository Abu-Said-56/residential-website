import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        // console.log(user)
        logOut()
            .then(() => {            
                Swal.fire("User Log Out Successfuly");
            })
            .catch(error => {              
                console.error(error);
            });
            navigate(`/`);
    }

    const navlinks = <>
        <li className='text-xl'><NavLink to="/">Home</NavLink></li>
        {
            user ? 
            " "
            :
            <li className='text-xl'><NavLink to="/register">Register</NavLink></li>

        }
        <li className='text-xl'><NavLink to="/update">Update</NavLink></li>
        {
            user ? 
            <li className='text-xl'><NavLink to="/profile">Profile</NavLink></li>
            :
            " "

        }
        <li className='text-xl'><NavLink to="/estatesSection">Estates</NavLink></li>
        

    </>
    return (
        <div className="navbar bg-slate-400 w-full mb-5 py-2 rounded-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navlinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-2xl">HomeNestHub</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navlinks}
                </ul>
            </div>
            <div className="navbar-end">
                
                {
                    user ? <>
                        <span>
                            <div className="avatar navbar-end">
                                <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                                    <img src={user.photoURL}/>
                                </div>
                            </div>
                        </span>
                        <button onClick={handleLogout} className="btn btn-accent">Log Out</button>
                    </>
                        : <Link to="/login">
                            <button className="btn btn-secondary text-lg">Login</button>
                        </Link>
                }
            </div>
        </div>
    );
};

export default Navbar;