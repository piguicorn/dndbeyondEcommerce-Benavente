import { createContext, useState, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword, updateProfile, signOut, signInWithEmailAndPassword, deleteUser, updatePassword, updateEmail } from 'firebase/auth';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null)

    const createNewUser = (displayName, email, password) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                const user = userCredential.user;
                console.log('user created', user);

                // adds user's name to the profile after creating the account
                updateProfile(auth.currentUser, { displayName })
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                console.log('error ', errorCode, errorMessage);
            })
    }

    const login = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                //const user = userCredential.user;
                //window.location.href = '/marketplace'
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                console.log(errorCode, errorMessage)
            });
    }

    const logout = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            setCurrentUser(null)
            window.location.href = '/marketplace'
        }).catch((error) => {
            console.log('error signing out', error);
        });
    }

    const deleteAccount = () => {
        const auth = getAuth();
        const user = auth.currentUser;

        deleteUser(user).then(() => {
            // User deleted.
            setCurrentUser(null)
            window.location.href = '/marketplace'
        }).catch((error) => {
            // An error ocurred
            console.log(error)
        });
    }

    const updateInfo = ({ name, email, password }) => {
        const auth = getAuth();
        const user = auth.currentUser;

        updateProfile(user, {displayName: name})
        .then(updateEmail(user, email))
        .then(() => password ? updatePassword(user, password) : null)
        .catch((error) => console.log(error))

        /*
        updateProfile(auth.currentUser, {
            displayName: name, email
        }).then(() => {
            // Profile updated!
            console.log('profile updated')

            if (password) {
                updatePassword(auth.currentUser, password).then(() => {
                    // Update successful.
                }).catch((error) => {
                    // An error ocurred
                    console.log(error)
                });
            }

        }).catch((error) => {
            // An error occurred
            console.log(error)
        });*/
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
    );
};