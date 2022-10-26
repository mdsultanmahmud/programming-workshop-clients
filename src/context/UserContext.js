import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import {getAuth, createUserWithEmailAndPassword,
     updateProfile, onAuthStateChanged, 
     signInWithEmailAndPassword, signOut, 
     GoogleAuthProvider, signInWithPopup, GithubAuthProvider} from 'firebase/auth'
import app from '../firebase/firebase.init';
import { useEffect } from 'react';
export const AuthContext = createContext()
const auth = getAuth(app)
const UserContext = ({children}) => {
    const [user ,setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()
    //create a user
    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //update user profile
    const updateUserProfile = (profile) =>{
        setLoading(true)
        return updateProfile(auth.currentUser,profile )
    }

    //user login 
    const userLoginWithEmailAndPass = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // user logout 
    const logOut =  () =>{
        setLoading(true)
        return signOut(auth)
    }

    // login with google
    const loginWithGoogle = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    //login with github
    const loginWithGithub = () =>{
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }
    // get current user 
    useEffect(() =>{
        const unsubscibe = onAuthStateChanged(auth, (currentUser) =>{
            if(currentUser){
                console.log('current user', currentUser)
                setUser(currentUser)
                setLoading(false)

            }else{
                console.log('current kono user nai')
                setUser({})
                setLoading(false)
            }
        })

        return () => unsubscibe()
    } ,[])



    const userInfo = {user, createUser, updateUserProfile, 
        userLoginWithEmailAndPass, logOut, loginWithGoogle, loginWithGithub}
    return (
        <AuthContext.Provider value={userInfo}>
                {children}
        </AuthContext.Provider>
    );
};

export default UserContext;