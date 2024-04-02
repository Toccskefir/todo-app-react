import Todo from "./todoInterface";
import {HTMLAttributes, PropsWithChildren, ReactNode, useContext} from "react";
import DarkModeContext from "./DarkModeContext";

interface Props extends PropsWithChildren<HTMLAttributes<HTMLDivElement>>{
}

function Card(props: Props) {
    const {darkMode} = useContext(DarkModeContext);
    return (
        <div
            {...props}
            className={`card ${darkMode ? 'light' : 'dark'} ${props.className}`}
        />
    );
}

export default Card;