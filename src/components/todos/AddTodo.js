import React, { useState } from "react";

export default function AddTodo({ todos, onAddTodo }) {
  const [title, setTitle] = useState("");
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let newTodo = {
      id: `todo-${title}-${todos.length + 1}`,
      title,
      tasks: [],
    };
    onAddTodo(newTodo);
    setTitle("");
  };
  return (
    <div className="row justify-content-center">
      <form className="col-md-4" onSubmit={handleSubmit}>
        <div className="input-group mb-3 mt-3">
          <input
            className="form-control"
            placeholder="Title"
            required
            value={title}
            onChange={handleChange}
          />
          <button className="btn btn-primary" type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
