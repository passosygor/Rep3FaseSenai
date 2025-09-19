import {Children, createContext, useContext,  useState} from 'react'

const AuthContext = createContext()

export const AuthProvider = ({Children}) => {
    const [user, setUser] = useState(null)

    const login = (email) => {
        setUser({ email });
    }

    const logout = () => {
        setUser(null)
    }

    return(
        <AuthContext.Provider value ={{user,login,logout}}>
            {Children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)