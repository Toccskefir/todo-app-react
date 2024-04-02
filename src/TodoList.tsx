import Todo from "./todoInterface";
import Card from "./Card";
import {useContext} from "react";
import DarkModeContext from "./DarkModeContext";

interface TodoListProps {
    todos: Todo[];
}

function TodoList(props: TodoListProps) {
    const {darkMode} = useContext(DarkModeContext);

    return(
        <div style={{ display: 'flex', gap: 16}} className={darkMode ? 'dark' : 'light'}>
            {props.todos.map((todo) => (
                <Card key={todo.id} onClick={() => alert('Hello')}>
                    {todo.text}
                </Card>
            ))}
            <Card className="card--red">
                Piros tojás
            </Card>
        </div>
    );
}

export default TodoList;