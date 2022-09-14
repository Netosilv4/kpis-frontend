/* eslint-disable no-undef */
import { useState, createContext } from 'react'

interface DrawerProviderI {
    open: boolean
    handleDrawerOpen: () => void
    handleDrawerClose: () => void
    setPage: (page: string) => void
    page: string
}

export const DrawerContext = createContext({} as DrawerProviderI)

export const DrawerProvider = ({ children } : { children: JSX.Element}) => {
  const [open, setOpen] = useState(false)
  const [page, setPage] = useState('HEADCOUNT')

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
        <DrawerContext.Provider
        value={{
          open,
          handleDrawerOpen,
          handleDrawerClose,
          setPage,
          page
        }}
        >
        {children}
        </DrawerContext.Provider>
  )
}
