import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import {getAuth, createUserWithEmailAndPassword,
     updateProfile, onAuthStateChanged, 
     signInWithEmailAndPassword, signOut, 
     GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import app from '../firebase/firebase.init';
import { useEffect } from 'react';
export const AuthContext = createContext()
const auth = getAuth(app)
const UserContext = ({children}) => {
    const [user ,setUser] = useState(null)
    const googleProvider = new GoogleAuthProvider()
    //create a user
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //update user profile
    const updateUserProfile = (profile) =>{
        return updateProfile(auth.currentUser,profile )
    }

    //user login 
    const userLoginWithEmailAndPass = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    // user logout 
    const logOut =  () =>{
        return signOut(auth)
    }

    // login with google
    const loginWithGoogle = () =>{
        return signInWithPopup(auth, googleProvider)
    }
    // get current user 
    useEffect(() =>{
        const unsubscibe = onAuthStateChanged(auth, (currentUser) =>{
            if(currentUser){
                console.log('current user', currentUser)
                setUser(currentUser)

            }else{
                console.log('current kono user nai')
                setUser({})
            }
        })

        return () => unsubscibe()
    } ,[])



    const userInfo = {user, createUser, updateUserProfile, 
        userLoginWithEmailAndPass, logOut, loginWithGoogle}
    return (
        <AuthContext.Provider value={userInfo}>
                {children}
        </AuthContext.Provider>
    );
};

export default UserContext;