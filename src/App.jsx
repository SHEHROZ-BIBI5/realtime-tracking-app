import { useState } from "react";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text, date) => {
    setTodos([...todos, { text, date }]);
  };

  
  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="container mt-5">
      <AppName />
      <AddTodo addTodo={addTodo} />
      <TodoItems todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
