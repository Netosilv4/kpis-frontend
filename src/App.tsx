import { useContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthContext } from './contexts/AuthProvider'
import { DrawerProvider } from './contexts/DrawerProvider'
import Dashboard from './pages/dashboard'
import SignIn from './pages/login'

function App () {
  const { user } = useContext(AuthContext)

  if (user) {
    return (
      <DrawerProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="*" element={<h1>404</h1>} />
          </Routes>
        </BrowserRouter>
      </DrawerProvider>
    )
  }

  return (
    <SignIn />
  )
}

export default App
