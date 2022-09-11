import { useState } from "react";
import { createContext } from "react";

export const DrawerContext = createContext({} as DrawerProviderI);

interface DrawerProviderI {
    open: boolean
    handleDrawerOpen: () => void
    handleDrawerClose: () => void
}

export const DrawerProvider = ({ children } : { children: JSX.Element}) => {
    const [open, setOpen] = useState(false);
    
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    
    const handleDrawerClose = () => {
        setOpen(false);
    };
    
    return (
        <DrawerContext.Provider
        value={{
            open,
            handleDrawerOpen,
            handleDrawerClose,
        }}
        >
        {children}
        </DrawerContext.Provider>
    );
}