import React from "react";
import "./Task.css";
import { MdDelete, MdInfoOutline, MdOutlineDone } from "react-icons/md";

const Task = ({ task, onClick, handleRemoveTask }) => {
  return (
    <div
      className={task.completed ? "task-container completed" : "task-container"}
      style={task.completed ? { borderLeft: "6px solid chartreuse" } : {}}
    >
      <div onClick={() => onClick(task.id)} className="task-title-container">
        {task.title}
      </div>
      <div className="buttons-container">
        <button
          className={task.completed ? "button-checked" : "button-uncheked"}
          onClick={() => onClick(task.id)}
        >
          <MdOutlineDone />
        </button>
        <button className="button-uncheked">
          <MdInfoOutline />
        </button>
        <button
          className="button-uncheked"
          onClick={() => handleRemoveTask(task.id)}
        >
          <MdDelete />
        </button>
      </div>
    </div>
  );
};

export default Task;
