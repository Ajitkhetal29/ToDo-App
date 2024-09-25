import CompletedTaskList from "./CompletedTaskList";

function CompletedTask({completedTodo}){

    return (
        <div>
          {completedTodo.map((item) => (
            <CompletedTaskList
              key={item.name}
              taskName={item.name}
              taskCompletedate={item.dueDate}
            ></CompletedTaskList>
          ))}
        </div>
      );

}

export default CompletedTask;
