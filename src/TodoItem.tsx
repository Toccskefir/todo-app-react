import Todo from "./todoInterface";
import {useContext} from "react";
import DarkModeContext from "./DarkModeContext";

interface TodoItemProps {
    todo: Todo;
}

function TodoItem(props: TodoItemProps) {
    const {darkMode} = useContext(DarkModeContext);
    return (
        <li style={{
            color: darkMode ? 'black' : 'white',
        }}>
            {props.todo.text}
        </li>
    );
}

export default TodoItem;