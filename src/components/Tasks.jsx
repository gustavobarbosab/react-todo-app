import React from "react";

import Task from "./Task";

const Tasks = ({ tasks, onClickTask, handleRemoveTask }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task task={task} onClick={onClickTask} handleRemoveTask={handleRemoveTask} />
      ))}
    </>
  );
};

export default Tasks;
