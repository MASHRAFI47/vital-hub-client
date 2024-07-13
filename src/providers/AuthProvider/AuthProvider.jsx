import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react"
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updatePassword, updateProfile } from "firebase/auth";
import app from '../../firebase/firebase.init';


const auth = getAuth(app);

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    //theme changer
    const [themes, setThemes] = useState('emerald')

    const handleThemeChange = (e) => {
        if(e.target.checked) {
            setThemes('synthwave')
        }
        else {
            setThemes('emerald')
        }
    }


    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const updateUserPassword = (newPassword) => {
        return updatePassword(auth.currentUser, newPassword)
    }


    const updateUserProfile = (fullName, image) => {
        return updateProfile(auth.currentUser, {
            displayName: fullName,
            photoURL: image
        })
            .then(() => {
                setUser({
                    displayName: fullName,
                    photoURL: image
                })
            })
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unSubscribe()
        }
    }, []);

    const authInfo = { user, loading, themes, handleThemeChange, createUser, updateUserProfile, updateUserPassword, logOut, signInUser }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider