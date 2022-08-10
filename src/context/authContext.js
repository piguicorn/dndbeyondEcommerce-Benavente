import { createContext, useState, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword, updateProfile, signOut, signInWithEmailAndPassword, deleteUser, updatePassword, updateEmail } from 'firebase/auth';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);

    const createNewUser = (displayName, email, password, setErrorMessage) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                const user = userCredential.user;
                console.log('user created', user);

                // adds user's name to the profile after creating the account
                updateProfile(auth.currentUser, { displayName });
            })
            .catch((error) => setErrorMessage(error.message));
    }

    const login = (email, password, setErrorMessage) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .catch((error) => setErrorMessage(error.message));
    }

    const logout = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            setCurrentUser(null);
        }).catch((error) => {
            console.log('error signing out', error);
        });
    }

    const deleteAccount = () => {
        const auth = getAuth();
        const user = auth.currentUser;

        deleteUser(user).then(() => {
            // User deleted.
            setCurrentUser(null);

        }).catch((error) => {
            // An error ocurred
            console.log(error);
        });
    }

    const updateInfo = ({ name, email, password }, setErrorMessage) => {
        const auth = getAuth();
        const user = auth.currentUser;

        updateProfile(user, { displayName: name })
            .then(updateEmail(user, email))
            .then(() => password ? updatePassword(user, password) : null)
            .catch((error) => setErrorMessage(error.message));
    }

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = auth.onAuthStateChanged(user => setCurrentUser(user));

        return unsubscribe; // cleans up after changing the state
    }, []);

    return (
        <AuthContext.Provider value={[currentUser, createNewUser, login, logout, deleteAccount, updateInfo]}>
            {children}
        </AuthContext.Provider>
    )
}