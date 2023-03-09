import React, {useContext, createContext, useState, useEffect} from "react";
import SideNavigation from "../component/SideNavigation";
const GlobalContext = createContext()
export const ContextProvider = ({children})=>{
    const [menuOpen, setMenuOpen] = useState(false)
    const handleMenuClick = ()=>{

        setMenuOpen(!menuOpen)

    }

    return(
        <GlobalContext.Provider value={{
            handleMenuClick,
            menuOpen, setMenuOpen
        }}
        >
            {children}
        </GlobalContext.Provider>
    )
}
export const useGlobalContext = ()=> useContext(GlobalContext)