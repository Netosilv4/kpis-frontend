import React, { createContext, FormEvent } from "react";
import useAuth from "../hooks/useAuth";

interface AuthContextData {
    login: (email: FormEvent<HTMLFormElement>) => void
    user: string | undefined
    error: string | undefined
}

export const AuthContext = createContext({} as AuthContextData);

const AuthProvider = ({ children } : { children: JSX.Element}) => {
    const { login, user, error } = useAuth()
    

    return <AuthContext.Provider value={{
        login,
        user,
        error
    }}
    >
        {children}
    </AuthContext.Provider>
}

export default AuthProvider;