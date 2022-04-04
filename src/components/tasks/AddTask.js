import React, { useState } from "react";
import dateformat from "dateformat";

export default function AddTask({ tasks, onAdd, onCancel }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = React.useState(dateformat(new Date(), "yyyy-mm-dd"));
  const handleSubmit = (e) => {
    e.preventDefault();
    const dueDate = new Date(date);
    let newTask = {
      id: `task-${title}-${tasks.length + 1}`,
      title,
      completed: false,
      dueDate: dueDate.getTime(),
    };
    onAdd(newTask);
    setTitle("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group mb-3">
        <input
          className="form-control"
          placeholder="Title"
          value={title}
          required
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </div>

      <div className="input-group mb-3">
        <input
          className="form-control"
          type="date"
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
      </div>
      <button className="btn btn-primary">Add</button>
      <button
        className="btn btn-secondary"
        style={{ marginLeft: "20px" }}
        onClick={onCancel}
      >
        Cancel
      </button>
    </form>
  );
}
