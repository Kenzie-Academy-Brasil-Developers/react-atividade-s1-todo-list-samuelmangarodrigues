import "./App.css";
import { useState } from "react";
import TodoList from "./components/TodoList";
import Form from "./components/Form ";

function App() {
  const [todoList, setTodoList] = useState([]);
  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };
  const handleTodo = (rmItem) => {
    const remItem = todoList.filter((item) => item !== rmItem);
    setTodoList(remItem);
  };
  return (
    <div className="App">
      <header className="App-header">
        <Form addTodo={addTodo} />
        <TodoList handleTodo={handleTodo} todoList={todoList} />
      </header>
    </div>
  );
}

export default App;
