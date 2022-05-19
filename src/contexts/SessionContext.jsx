import { createContext, useState } from "react";

const SessionContext = createContext();

export function SessionProvider({ children }) {
    const [country, setCountry] = useState("BR");
    const [providersSelected, setProvidersSelected] = useState([]);
    return (
        <SessionContext.Provider value={{
            country, setCountry,
            providersSelected, setProvidersSelected,
        }}>
            {children}
        </SessionContext.Provider>
    )
}

export default SessionContext;