
function Task({ isCompleted, task, changeStatusHandler }) {
    const changeStatos = isCompleted => !isCompleted;

    return (
        <>
            <tr className={isCompleted ? 'todo is-completed' : 'todo'} >
                <td>{task}</td>
                <td>{isCompleted ? 'Complete' : 'Incomplete'}</td>
                <td className="todo-action">
                    <button className="btn todo-btn" onClick={changeStatusHandler}>Change status</button>
                </td>
            </tr>
        </>
    );
}

export default Task;
