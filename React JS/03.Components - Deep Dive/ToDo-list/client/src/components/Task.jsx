
function Task({ className, task, status }) {
    return (
        <>
            <tr className={className}>
                <td>{task}</td>
                <td>{status}</td>
                <td className="todo-action">
                    <button className="btn todo-btn">Change status</button>
                </td>
            </tr>
        </>
    );
}

export default Task;
