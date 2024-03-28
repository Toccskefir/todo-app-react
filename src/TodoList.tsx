import Todo from "./todoInterface";
import TodoItem from "./TodoItem";

interface TodoListProps {
    todos: Todo[];
}

function TodoList(props: TodoListProps) {
    return(
        <ul>
            {props.todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo}/>
            ))}
        </ul>
    );
}

export default TodoList;