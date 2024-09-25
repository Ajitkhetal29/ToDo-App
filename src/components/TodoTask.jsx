import DisplayTask from "./DisplayTask";

function TodoTask({ todoItems, onDeleteClick }) {
  return (
    <div>
      {todoItems.map((item) => (
        <DisplayTask
          key={item.name}
          todoName={item.name}
          todoDate={item.dueDate}
          onDeleteClick={onDeleteClick}
        ></DisplayTask>
      ))}
    </div>
  );
}

export default TodoTask;
