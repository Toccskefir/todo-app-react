import React from "react";

interface DarkModeContextValue {
    darkMode: boolean;
    setDarkMode: (darkMode: boolean) => void;
}

const DarkModeContext = React.createContext<DarkModeContextValue>(null as unknown as DarkModeContextValue);

export default DarkModeContext;