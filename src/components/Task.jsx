import React from "react";
import "./Task.css";
import { MdDelete } from "react-icons/md";
import { MdOutlineDone } from "react-icons/md";

const Task = ({ task, onClick, handleRemoveTask }) => {
  return (
    <div
      className="task-container"
      style={task.completed ? { borderLeft: "6px solid chartreuse" } : {}}
    >
      <div onClick={() => onClick(task.id)} className="task-title-container">{task.title}</div>
      <div className="buttons-container">
        <button
          style={
            task.completed
              ? { color: "chartreuse", display: "inline" }
              : { display: "none" }
          }
        >
          <MdOutlineDone />
        </button>
        <button onClick={() => handleRemoveTask(task.id)}>
          <MdDelete />
        </button>
      </div>
    </div>
  );
};

export default Task;
