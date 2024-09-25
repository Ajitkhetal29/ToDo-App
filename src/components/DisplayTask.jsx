import style from './DisplayTask.module.css';

function DisplayTask({ todoName, todoDate, onDeleteClick }) {
    return (
        <div className={style.taskContainer}>
            <div className={style.taskRow}>
                <div className={style.taskName}>{todoName}</div>
                <div className={style.taskDate}>{todoDate}</div>
                <div className={style.taskButton}>
                    <button className="btn btn-danger" onClick={() => onDeleteClick(todoName)}>
                        Task Done
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DisplayTask;
