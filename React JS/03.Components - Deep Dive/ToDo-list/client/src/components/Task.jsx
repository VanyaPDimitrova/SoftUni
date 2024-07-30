
function Task({ id, isCompleted, task }) {
    return (
        <>
            <tr key={id} className={isCompleted ? 'todo is-completed' : 'todo'}>
                <td>{task}</td>
                <td>{isCompleted ? 'Complete' : 'Incomplete'}</td>
                <td className="todo-action">
                    <button className="btn todo-btn">Change status</button>
                </td>
            </tr>
        </>
    );
}

export default Task;
