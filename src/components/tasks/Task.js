import React from "react";
import dateformat from "dateformat";
import { Draggable } from "react-beautiful-dnd";

export default function Task({ task, onComplete, index }) {
  const isOverdue = (task) =>
    !task.complete && task.dueDate < new Date().getTime();
  const itemClass = `list-group-item list-group-item-${
    isOverdue(task) ? "danger" : "light"
  }`;
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <li
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className={itemClass}
        >
          <div className="item">
            <span
              className={`item-title ${task.completed ? " complete-item" : ""}`}
            >
              {task.title}
            </span>
            <span>
              {`Due by ${dateformat(new Date(task.dueDate), "dd-mmm-yyyy")}`}
              <input
                className="check-complete"
                type="checkbox"
                checked={task.completed}
                onChange={onComplete}
              />
            </span>
          </div>
        </li>
      )}
    </Draggable>
  );
}
