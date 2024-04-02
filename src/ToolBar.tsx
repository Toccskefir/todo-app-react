import React, {useContext} from "react";
import darkModeContext from "./DarkModeContext";

function ToolBar() {
    const {darkMode, setDarkMode} = useContext(darkModeContext);

    return (
        <div style={{height: '100px' }} className={darkMode ? 'dark' : 'light'}>
            <label>
                {darkMode ? 'Change to Light Mode' : 'Change to Dark Mode'}
                <input type="checkbox" checked={darkMode} onChange={(e) => {
                    setDarkMode(e.target.checked);
                }}/>
            </label>
        </div>
    );
}

export default ToolBar;