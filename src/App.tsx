import React, { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState<string[]>([]);
  const [currentTodo, setCurrentTodo] = useState("");

  return (
    <div className="base">
      <div className="todoListBase">
        <div className="todoInputBase">
          <input
            className="todoInput"
            value={currentTodo}
            onChange={(e) => setCurrentTodo(e.target.value)}
          />
          <button
            className="submitTodoButton"
            onClick={() => {
              setTodos((todos) => [...todos, currentTodo]);
              setCurrentTodo("");
            }}
          >
            Submit
          </button>
        </div>
        <ul className="todoList">
          {todos.map((todo) => (
            <li className="todoItem">{todo}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
