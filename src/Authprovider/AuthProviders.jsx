import React, { createContext } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from '../Firebase/firebase.config';
export const AuthContext = createContext(null);
const AuthProviders = ({children}) => {

    const createUser = (email , password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const info ={
        createUser
    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;