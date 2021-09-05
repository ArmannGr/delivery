import React, {useContext, useEffect,useState} from 'react';
import {auth, createUser,signIn} from '../firebase';

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({children}){
    const [currentUser, SetCurrentUser] = useState();

    const [loading, SetLoading] = useState(true);

    function signUp(email, password){
        return createUser(auth, email, password);
    }

    function login(email, password){
        return signIn(auth,email,password);
    }
    
    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged(user => {
            SetCurrentUser(user);
            SetLoading(false);
        });

        return unsubscribe;
    },[])



    const value = {
        currentUser,
        signUp,
        login
    };

    return <AuthContext.Provider value={value}>
        {!loading && children}
    </AuthContext.Provider>
}