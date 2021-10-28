import { useState } from "react";
import "./style.css";

const Form = ({ addTodo }) => {
  const [input, setInput] = useState([]);

  return (
    <>
      <h1>Todo List</h1>
      <input
        className="Inpts"
        placeholder="Digite uma tarefa"
        onChange={(e) => setInput(e.target.value)}
      ></input>
      <button className="BtnsAdd" onClick={() => addTodo(input)}>
        Adicionar Tarefa
      </button>
    </>
  );
};
export default Form;
