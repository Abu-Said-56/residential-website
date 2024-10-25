import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { getAuth, updateProfile } from "firebase/auth";

const Update = () => {
    const auth = getAuth();
    const { user,createUser } = useContext(AuthContext);
    
     const handleUpdateProfile = e =>{
        e.preventDefault();
        const photoURL = e.target.photoURL.value;
        // const email = e.target.email.value;
        const Name = e.target.Name.value;
       console.log(photoURL,Name);


        // create user in firebase

                // update user profile
                updateProfile(auth.user,{
                    displayName: "Jane Q. User", photoURL: "https://example.com/jane-q-user/profile.jpg"
                })
                .then(() =>{
                    Swal.fire("Profile Updated");
                })
                .catch(error=>{
                    console.error(error);
                })
            
            


     }


    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
   
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleUpdateProfile} className="card-body">
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">PhotoUrl</span>
          </label>
          <input type="text" name="photoURL" placeholder="text" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered"  />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="Name" placeholder="password" className="input input-bordered"  />
        </div>
        <div className=" form-control mt-6">
            <button className="btn btn-primary">Update Profile</button>
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default Update;