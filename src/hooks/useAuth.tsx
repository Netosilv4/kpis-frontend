import { FormEvent, useContext, useState } from "react"
import axios from 'axios'
import { loadingContext } from "../contexts/Loading"

const { REACT_APP_API_URL } = process.env

const useAuth = () => {
    const [user, setUser] = useState<string>()
    const [error, setError] = useState<string>()
    const { setLoading } = useContext(loadingContext)

    const login = async (event: FormEvent<HTMLFormElement>) => {
        try {
            event.preventDefault()
            setLoading(true)        
            const data = new FormData(event.currentTarget)
            const response = await axios.post(`${REACT_APP_API_URL}/login`, {
                email: data.get('email'),
            })
            setLoading(false)
            setUser(response.data)
        } catch (err: any) {
            console.log("Erro", err)
            setLoading(false)
            setError(err.response.data.message)
        }
    }

    return {
        user,
        login,
        error
    }
}

export default useAuth