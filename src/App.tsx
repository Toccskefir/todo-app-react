import React, {useState} from 'react';
import './App.css';
import TodoList from "./TodoList";
import ToolBar from "./ToolBar";
import DarkModeProvider from "./DarkModeProvider";

function App() {
    const [todos, setTodos] = useState([{
        id: '1',
        text: 'asdad',
    }, {
        id: '2',
        text: 'sdsffdsf',
    }]);

  return (
      <DarkModeProvider>
          <ToolBar />
          <TodoList todos={todos}/>
      </DarkModeProvider>
  );
}

export default App;
