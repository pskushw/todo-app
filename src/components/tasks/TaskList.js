import React from "react";
import Task from "./Task";
import { Droppable } from "react-beautiful-dnd";

export default function TaskList({ tasks, onComplete, id }) {
  return (
    <Droppable droppableId={id}>
      {(provided) => (
        <div {...provided.droppableProps} ref={provided.innerRef}>
          {tasks.length &&
            tasks.map((task, index) => {
              return (
                <Task
                  key={task.id}
                  task={task}
                  onComplete={() => onComplete(task.id)}
                  index={index}
                />
              );
            })}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}
