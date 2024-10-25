import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { ImEye, ImEyeBlocked } from 'react-icons/im';
import { getAuth ,GoogleAuthProvider,signInWithPopup} from 'firebase/auth';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import Swal from 'sweetalert2';

const Login = () => {
    // Create google provider
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const navigate = useNavigate();


    const [loginSuccessfuly, setLoginSuccessfuly] = useState('');
    const [loginError, setLoginError] = useState('');
    const [showPssward, setShowpassward] = useState(false);

    const { signInUser } = useContext(AuthContext);
     
    // Email Password Base Login Authentication
    const handEmailLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(email, password);

        // reset error and success function
        setLoginError('');
        setLoginSuccessfuly('');

        // Create user in firebase
        signInUser(email, password)
            .then(result => {
                //   console.log(result.user);
                setLoginSuccessfuly("User Logged Successfuly");
            })
            .catch(error => {
                // console.error(error);
                setLoginError("Please Check Your Information");
            })
    }

    const handleGoogleLogin = () =>{       
        // Google SignInWithPopup
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                // console.log(user);
                Swal.fire("User Login Successfuly");
                navigate(`/profile`)
            })
            .catch((error) => {
                // console.error(error.message);
            })
    }

    const handleGitHubLogin = () =>{
        signInWithPopup(auth,provider)
        .then((result)=>{
            const user = result.user;
            // console.log(user);
            Swal.fire("User Login Successfuly");

            navigate(`/profile`);
        })
        .catch((error)=>{
            // console.error(error);
        })
    }

    return (
        <div className="flex justify-center my-4 ">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-4">
                <form onSubmit={handEmailLogin} className="card-body">
                    <h2 className="text-3xl font-bold text-center">Please Login!</h2>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type={showPssward ? "text" : "password"}
                            name="password"
                            placeholder="password"
                            className="input input-bordered"
                            required />
                        <span className="text-2xl absolute right-3 bottom-3" onClick={() => setShowpassward(!showPssward)}>
                            {
                                showPssward ? <ImEye></ImEye> :
                                <ImEyeBlocked></ImEyeBlocked>
                            }
                        </span>
                    </div>
                    <div className="form-control mt-4">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p className='text-center font-semibold text-blue-400 py-2'>Or Login Using By</p>
                <div className='flex justify-center gap-4 pb-2'>
                    <button onClick={handleGoogleLogin} className='text-5xl'><FcGoogle/></button>
                    <button onClick={handleGitHubLogin} className='text-5xl'><FaGithub/></button>
                </div>
                {
                    loginError && <div role="alert" className="alert alert-error">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 shrink-0 stroke-current"
                            fill="none"
                            viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Error : {loginError}</span>
                    </div>
                }
                {
                    loginSuccessfuly && <div role="alert" className="alert alert-success">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 shrink-0 stroke-current"
                            fill="none"
                            viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{loginSuccessfuly}</span>
                    </div>
                }
                <p className='text-center'>Do Not Have An Account? Please <Link className='text-lg text-primary font-bold' to="/register"> Register</Link></p>
            </div>
        </div>
    );
};

export default Login;