import React, {useState} from 'react';
import './App.css';
import TodoList from "./TodoList";
import ToolBar from "./ToolBar";
import DarkModeProvider from "./DarkModeProvider";
import SplitPanel from "./SplitPanel";

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
          <SplitPanel left={<h1>Todo app</h1>} right={<TodoList todos={todos}/>}/>
      </DarkModeProvider>
  );
}

export default App;
