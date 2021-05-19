import "./App.css";
import { useYTodo } from "./hooks/useYTodo";

function App() {
  const { currentTodo, setCurrentTodo, addTodo, todos } = useYTodo();

  return (
    <div className="base">
      <div className="todoListBase">
        <form
          id="todoInputForm"
          onSubmit={() => {
            addTodo(currentTodo);
            setCurrentTodo("");
          }}
        >
          <input
            className="todoInput"
            value={currentTodo}
            onChange={(e) => setCurrentTodo(e.target.value)}
          />
          <button className="submitTodoButton">Submit</button>
        </form>
        <ul className="todoList">
          {todos.map((todo) => (
            <li key={todo} className="todoItem">
              {todo}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
