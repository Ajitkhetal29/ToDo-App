import { useState } from "react";
import style from "./AddTask.module.css";

function AddTask({ onNewItem }) {
  const [todoName, settodoName] = useState("");
  const [todoDate, settodoDate] = useState("");

  const handleNameChange = (event) => {
    settodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    settodoDate(event.target.value);
  };

  const handleAddButtonClick = () => {
    onNewItem(todoName, todoDate);
    settodoDate("");
    settodoName("");
  };

  return (
    <div className={`container text-center ${style.addTaskContainer}`}>
      <div className="row align-items-center">
        <div className={`col-sm ${style.inputColumn}`}>
          <input
            type="text"
            value={todoName}
            className={`form-control ${style.taskInput}`}
            placeholder="Enter Task"
            onChange={handleNameChange}
          />
        </div>
        <div className={`col-sm ${style.inputColumn}`}>
          <input
            type="date"
            value={todoDate}
            className={`form-control ${style.dateInput}`}
            onChange={handleDateChange}
          />
        </div>
        <div className="col-sm">
          <button
            className={`btn btn-success ${style.addButton}`}
            onClick={handleAddButtonClick}
          >
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTask;
