import React from "react";
import Todo from "./Todo";

export default function TodoList({ todos }) {
  return (
    <div className="row justify-content-start flex-wrap">
      {todos.length ? (
        todos.map((todo) => {
          return <Todo key={todo.id} todo={todo} />;
        })
      ) : (
        <div className="row justify-content-center">No Todo to show</div>
      )}
    </div>
  );
}
