import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'; // ES6
import { createUserWithEmailAndPassword } from "firebase/auth/cordova";
import auth from "../Firebase/firebase.config";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {


    const [user, setUser] = useState(null);

    const createUser = (email,password) => {
       
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signInUser = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password);
        
    }

    const logOut = () => {
       return signOut(auth)
    }

    // observ onAuthStateChanged
    useEffect(() => {
      const unSubscribe =  onAuthStateChanged(auth, currentUser => {
         setUser(currentUser);
        //  console.log('observing current user inside useeffect auth provider',currentUser);

        })
        return () =>{
            unSubscribe();
        }
  },[])

    const authInfo = {
        user, 
        createUser,
        signInUser,
        logOut,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
}