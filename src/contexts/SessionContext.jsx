import { createContext, useState } from "react";

const SessionContext = createContext();

export function SessionProvider({children}){
    const [country, setCountry] = useState("BR");
    return (
        <SessionContext.Provider value={{country, setCountry}}>
            {children}
        </SessionContext.Provider>
    )
}

export default SessionContext;