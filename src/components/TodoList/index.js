const TodoList = ({ todoList, handleTodo }) => {
  return (
    <ul className="Container">
      {todoList.map((todo) => (
        <>
          <li className="lists" key={todo}>
            Tarefa: {todo}
          </li>
          <button className="BtnsRm" onClick={() => handleTodo(todo)}>
            Concluído
          </button>
        </>
      ))}
    </ul>
  );
};
export default TodoList;
