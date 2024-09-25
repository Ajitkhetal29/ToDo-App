import style from "./CompletedTaskList.module.css";

function CompletedTaskList({ taskName, taskCompletedate }) {
  return (
    <div className={style.taskContainer}>
      <div className={style.taskRow}>
        <div className={style.taskName}>{taskName}</div>
        <div className={style.taskDate}>{taskCompletedate}</div>
      </div>
    </div>
  );
}

export default CompletedTaskList;
