import Task from './Task';

function Table() {
    return (
        <>
            <div className="table-wrapper">

                {/* Loading spinner - show the load spinner when fetching the data from the server */}

                <table className="table">
                    <thead>
                        <tr>
                            <th className="table-header-task">Task</th>
                            <th className="table-header-status">Status</th>
                            <th className="table-header-action">Action</th>
                        </tr>
                    </thead>

                    <tbody>

                        <Task className='todo is-completed' task='Give dog a bath' status='Complete' />
                        <Task className='todo' task='Vacuum floor' status='Incomplete' />
                        
                    </tbody>
                </table>
                </div>
        </>
    );
}

export default Table;
