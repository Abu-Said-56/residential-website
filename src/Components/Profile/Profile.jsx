import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Profile = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className="card text-center mx-auto my-4 bg-base-100 w-96 shadow-xl">
            <div className="text-center w-fit mx-auto">
                <figure className="px-8 pt-10">
                    <img
                        src={user?.photoURL}
                        className="rounded-lg" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Name : {user?.displayName}</h2>
                    <p>Email : {user?.email}</p>
                    <p>UID : {user?.uid}</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;