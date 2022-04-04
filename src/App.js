import { useState } from "react";
import "./App.css";
import AddTodo from "./components/todos/AddTodo";
import Header from "./components/Header";
import TodoList from "./components/todos/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const onAddTodo = (todo) => {
    setTodos([...todos, todo]);
  };
  return (
    <div className="container-fluid">
      <Header />
      <div>
        <AddTodo todos={todos} onAddTodo={onAddTodo} />
        <TodoList todos={todos} />
      </div>
    </div>
  );
}

export default App;
