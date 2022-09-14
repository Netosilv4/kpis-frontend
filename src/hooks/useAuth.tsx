import { FormEvent, useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { loadingContext } from '../contexts/Loading'
import { loginHandler } from '../services/auth'

const { REACT_APP_API_URL } = process.env

export interface UserInterface {
  id: string
  nome: string
  created_at: string
  updated_at: string
  status: string
  cargo: string
  emailGestor?: string
  token: string
}

const useAuth = () => {
  const [user, setUser] = useState<UserInterface>()
  const [error, setError] = useState<string>()
  const { setLoading } = useContext(loadingContext)

  useEffect(() => {
    const user = localStorage.getItem('kpis-token')
    if (user) {
      setUser(JSON.parse(user))
    }
  }, [])

  const login = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoading(true)
    const data = new FormData(event.currentTarget)
    const response = await loginHandler(data)
    setLoading(false)
    if (response.status === 200) {
      localStorage.setItem('kpis-token', JSON.stringify(response.data))
      return setUser(response.data)
    }
    localStorage.removeItem('kpis-token')
    setError(response.message)
  }

  const logout = () => {
    localStorage.removeItem('kpis-token')
    setUser(undefined)
  }

  return {
    user,
    login,
    error,
    logout
  }
}

export default useAuth
