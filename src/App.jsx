import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import "./App.css";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addNewTask = (taskTitle) => {
    let newTask = [
      ...tasks,
      {
        id: uuidv4(),
        title: taskTitle,
        completed: false,
      },
    ];

    setTasks(newTask);
  };

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) return { ...task, completed: !task.completed };
      return task;
    });
    setTasks(newTasks)
  };

  const handleRemoveTask = (taskId) => {
    const newTasks = tasks.filter((task) => {
      return task.id !== taskId
    });
    setTasks(newTasks)
  };

  return (
    <div className="container">
      <AddTask addNewTask={addNewTask} />
      <Tasks tasks={tasks} onClickTask={handleTaskClick} handleRemoveTask={handleRemoveTask}/>
    </div>
  );
};

export default App;
