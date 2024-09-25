import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AddTask from "./components/AddTask";
import TodoTask from "./components/TodoTask";
import CompletedTask from "./components/CompletedTask";
import AppName from "./components/AppName";
import AppName2 from "./components/Appname2";

function App() {
  const [todoItems, setTodoItems] = useState([]);
  const [completedTodo, setcompletedTodo] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    const newCompletedTodoItems = todoItems.filter(
      (item) => item.name === todoItemName
    );
    setTodoItems(newTodoItems);
    setcompletedTodo([...completedTodo, ...newCompletedTodoItems]);
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-12 text-center mb-3">
          <AppName />
        </div>
      </div>
      
      <div className="row">
        <div className="col-md-12">
          <AddTask onNewItem={handleNewItem} />
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-12">
          {todoItems.length === 0 && (
            <p className="alert alert-info">No Task For Today .. Enjoy Your Day ..!</p>
          )}
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <TodoTask todoItems={todoItems} onDeleteClick={handleDeleteItem} />
        </div>
      </div>

      <hr />

      {completedTodo.length !== 0 && (
        <>
          <div className="row">
            <div className="col-md-12 text-center">
              <AppName2 />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-12">
              <CompletedTask completedTodo={completedTodo} />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
