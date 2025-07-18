import { createContext, useState } from "react";

export const globalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <globalContext.Provider value={{ isLoading, setIsLoading }}>
            {children}
        </globalContext.Provider>
    );
};
