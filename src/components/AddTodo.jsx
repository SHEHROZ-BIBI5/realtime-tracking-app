import { useState } from "react";

function AddTodo({ addTodo }) {
  const [text, setText] = useState("");
  const [date, setDate] = useState("");

  const handleAddTodo = () => {
    if (text.trim() === "" || date.trim() === "") {
      alert("Please enter a task and select a date!");
      return;
    }
    addTodo(text, date);
    setText("");
    setDate("");
  };

  return (
    <div className="row justify-content-center mt-3">
      <div className="col-6">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Todo Here"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="col-4">
        <input
          type="date"
          className="form-control"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className="col-2">
        <button type="button" className="btn btn-success" onClick={handleAddTodo}>
          Add
        </button>
      </div>
    </div>
  );
}

export default AddTodo;
