import React, {useContext, useEffect, useState} from 'react';
import {addDoc, auth, createUser, db, doc, setDoc, signIn} from '../firebase';

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({children}) {
    const [currentUser, SetCurrentUser] = useState();

    const [loading, SetLoading] = useState(true);

    async function signUp(formData) {
        const user = await createUser(auth, formData.email, formData.password);
        delete formData.password;
        await setDoc(doc(db, `Users/${user.user.uid}`), formData);
    }

    function login(email, password) {
        return signIn(auth, email, password);
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            SetCurrentUser(user);
            SetLoading(false);
        });

        return unsubscribe;
    }, [])


    const value = {
        currentUser,
        signUp,
        login
    };

    return <AuthContext.Provider value={value}>
        {!loading && children}
    </AuthContext.Provider>
}