function TodoItems({ todos, deleteTodo }) {
  return (
    <ul className="list-group mt-3">
      {todos.map((todo, index) => (
        <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
          <div>
            <strong>{todo.text}</strong> - <small>{todo.date}</small>
          </div>
          <button className="btn btn-danger btn-sm" onClick={() => deleteTodo(index)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoItems;
