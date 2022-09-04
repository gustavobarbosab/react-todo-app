import React from "react";
import "./Task.css";
import { MdDelete } from "react-icons/md";
import { MdOutlineDone } from "react-icons/md";

const Task = ({ task, onClick, handleRemoveTask }) => {
  return (
    <div
      className="task-container"
      style={task.completed ? { borderLeft: "6px solid chartreuse" } : {}}
      onClick={() => onClick(task.id)}
    >
      <div>{task.title}</div>
      <div className="buttons-container">
      <button style={task.completed ? { color: "green", display: "inline" } : {display: "none"}}>
          <MdOutlineDone/>
        </button>
        <button
          className="button-remove-task"
          onClick={() => handleRemoveTask(task.id)}
        >
          <MdDelete/>
        </button>
      </div>
    </div>
  );
};

export default Task;
