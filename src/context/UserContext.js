import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import {getAuth, createUserWithEmailAndPassword, updateProfile} from 'firebase/auth'
import app from '../firebase/firebase.init';
export const AuthContext = createContext()
const auth = getAuth(app)
const UserContext = ({children}) => {
    const [user ,setUser] = useState(null)

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (profile) =>{
        return updateProfile(auth.currentUser,profile )
    }

    const userInfo = {user, createUser, updateUserProfile}
    return (
        <AuthContext.Provider value={userInfo}>
                {children}
        </AuthContext.Provider>
    );
};

export default UserContext;