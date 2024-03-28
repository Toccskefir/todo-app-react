import React, {useState} from 'react';
import './App.css';
import TodoList from "./TodoList";
import DarkModeContext from "./DarkModeContext";

function App() {
    const [darkMode, setDarkMode] = useState(false);
    const [todos, setTodos] = useState([{
        id: '1',
        text: 'asdad',
    }, {
        id: '2',
        text: 'sdsffdsf',
    }]);

    function handleChange() {
        setDarkMode(mode => !mode);
    }

  return (
      <DarkModeContext.Provider value={darkMode}>
          <div className={darkMode ? 'dark' : 'light'}>
              <label>
                  {darkMode ? 'Change to Light Mode' : 'Change to Dark Mode'}
                  <input type="checkbox" checked={darkMode} onChange={handleChange}/>
              </label>
              <TodoList todos={todos}/>
          </div>
      </DarkModeContext.Provider>
  );
}

export default App;
