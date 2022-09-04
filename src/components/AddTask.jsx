import React, { useState } from "react";
import "./AddTask.css";
import PrimaryButon from "./PrimaryButton";

const AddTask = ({ addNewTask }) => {
  const [inputMessage, setMessage] = useState("");

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const buttonClickListener = () => {
    addNewTask(inputMessage);
    setMessage("");
  };

  return (
    <div className="add-task-container">
      <input
        type="text"
        className="add-task-input"
        onChange={handleInputChange}
        value={inputMessage}
      />
      <PrimaryButon onClick={buttonClickListener}>Adicionar</PrimaryButon>
    </div>
  );
};

export default AddTask;
