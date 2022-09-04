import React from "react";
import "./Task.css";

const Task = ({ task, onClick, handleRemoveTask }) => {
  return (
    <div
      className="task-container"
      style={task.completed ? { borderLeft: "6px solid chartreuse" } : {}}
  >
      <div onClick={() => onClick(task.id)}>{task.title}</div>
      <div className="buttons-container">
        <button className="button-remove-task" onClick={() => handleRemoveTask(task.id)}>Remover</button>
      </div>
    </div>
  );
};

export default Task;
