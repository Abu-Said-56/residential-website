import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";
import { ImEye } from "react-icons/im";
import { ImEyeBlocked } from "react-icons/im";
import { updateProfile } from "firebase/auth";
import auth from "../../Firebase/firebase.config";
import Swal from "sweetalert2";

const Register = () => {
    const [resisterError, setResisterError] = useState('');
    const [succes,setSuccess] = useState();
    const [showPss,setShowpass] = useState(false);

    const { createUser } = useContext(AuthContext);


    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(name, email, password);

         // reset error 
         setResisterError('');
         setSuccess('');

        // password condition
        if (password.length < 6) {
            setResisterError('Length must be at least Six character');
            return;
        }else if(!/[A-Z]/.test(password)){
          setResisterError('Must have an Uppercase letter in the password');
          return;
        }else if(!/[a-z]/.test(password)){
          setResisterError('Must have an Lowercase letter in the password');
          return;
        }
       
        // create user in firebase
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                setSuccess('User Created Successfuly');

                // update user profile
                // updateProfile(auth.user,{
                //     displayName: "Abu Said", photoURL: "https://lh3.googleusercontent.com/a/ACg8ocIics8fgT_N471qkKznHFdIE71T5O9NVWtgzq5rsha2Pf2k_lgb=s96-c"
                // })
                // .then(() =>{
                //     Swal.fire("Profile Updated");
                // })
                // .catch(error=>{
                //     console.error(error);
                // })
            })
            .catch(error => {
                // console.error(error);
                setResisterError(error.message);
            });

    }

    return (
        <div className="flex justify-center my-4">          
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-4">
                <form onSubmit={handleRegister} className="card-body">
                    <h2 className="text-3xl font-bold text-center">Please Register!</h2>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="name" name="name" placeholder="Name" className="input input-bordered" required />
                    </div>
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
                        type={ showPss ? "text" : "password"}
                        name="password"
                        placeholder="password"
                        className="input input-bordered"
                        required />
                        <span className="text-2xl absolute right-3 bottom-3" onClick={()=>setShowpass(!showPss)}>
                            {
                                showPss ? <ImEye></ImEye> :
                                <ImEyeBlocked></ImEyeBlocked>
                            }
                        </span>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
                {
                    resisterError && <div role="alert" className="alert alert-error">
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
                    <span>Error : {resisterError}</span>
                  </div>
                }
                {
                    succes && <div role="alert" className="alert alert-success">
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
                    <span>{succes}</span>
                  </div>
                }
                <p className="text-center">Already Have An Account? Please <Link className='text-lg text-primary font-bold' to="/login"> Login</Link></p>
            </div>
            </div>
    );
};

export default Register;