/* eslint-disable no-undef */
import { createContext, useState } from 'react'
import Loading from '../components/loading'

interface LoadingProviderI {
  setLoading : (loading: boolean) => void
  loading: boolean
}

export const loadingContext = createContext({} as LoadingProviderI)

const LoadingProvider = ({ children }: { children: JSX.Element }) => {
  const [loading, setLoading] = useState(false)

  return <loadingContext.Provider value={{
    loading,
    setLoading
  }}
  >
    {children}
    {
      loading && <Loading />
    }
  </loadingContext.Provider>
}

export default LoadingProvider
