import {ReactNode, useState} from "react";
import DarkModeContext from "./DarkModeContext";

interface DarkModeProviderProps {
    children: ReactNode;
}

function DarkModeProvider({children}: DarkModeProviderProps) {
    const [darkMode, setMode] = useState(false);

    function setDarkMode() {
        setMode(mode => !mode);
    }

    return (
        <DarkModeContext.Provider value={{darkMode, setDarkMode}}>
            {children}
        </DarkModeContext.Provider>
    );
}

export default DarkModeProvider;