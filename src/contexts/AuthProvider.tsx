/* eslint-disable no-undef */
import { createContext, FormEvent } from 'react'
import useAuth, { UserInterface } from '../hooks/useAuth'

interface AuthContextData {
    login: (email: FormEvent<HTMLFormElement>) => void
    user: UserInterface | undefined
    error: string | undefined
    logout: () => void
}

export const AuthContext = createContext({} as AuthContextData)

const AuthProvider = ({ children } : { children: JSX.Element}) => {
  const { login, user, error, logout } = useAuth()

  return <AuthContext.Provider value={{
    login,
    user,
    error,
    logout
  }}
    >
        {children}
    </AuthContext.Provider>
}

export default AuthProvider
