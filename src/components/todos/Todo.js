import React, { useState } from "react";
import AddTask from "../tasks/AddTask";
import TaskList from "../tasks/TaskList";
import { DragDropContext } from "react-beautiful-dnd";

export default function Todo({ todo }) {
  const [isAdding, setIsAdding] = useState(false);
  const [tasks, setTasks] = useState(todo.tasks);

  const onAdd = (task) => {
    setTasks([...tasks, task]);
  };

  const onComplete = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    const newTasks = tasks.filter((item, index) => index !== source.index);
    const elementToPlace = tasks.find((item, index) => index === source.index);
    newTasks.splice(destination.index, 0, elementToPlace);
    setTasks(newTasks);
  };

  return (
    <div className="card col-sm-3">
      <div className="card-body">
        <div className="card-title row">
          <h4 className="col">{todo.title}</h4>
          {!isAdding && (
            <button
              type="button"
              className="btn btn-link col"
              onClick={() => setIsAdding(true)}
            >
              Add task
            </button>
          )}
        </div>
        {isAdding && (
          <AddTask
            tasks={tasks}
            onAdd={onAdd}
            onCancel={() => setIsAdding(false)}
          />
        )}
        {tasks.length ? (
          <DragDropContext onDragEnd={onDragEnd}>
            <TaskList tasks={tasks} id={todo.id} onComplete={onComplete} />
          </DragDropContext>
        ) : (
          <p className="card-text">No task</p>
        )}
      </div>
    </div>
  );
}
