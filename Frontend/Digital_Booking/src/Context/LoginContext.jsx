import React, { createContext } from "react";
import { useState } from "react";

export const ContextLogin = createContext({})

const ContextLoginProvider = ({children}) => {

    const [isLogged, setIsLogged] = useState(false)

    const handleLogin = () => {
        setIsLogged(true)
    }

    const state = {
        isLogged,
        handleLogin
    }

    return (
        <ContextLogin.Provider value={state}>
            {children}
        </ContextLogin.Provider>
    )
}

export default ContextLoginProvider