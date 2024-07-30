import { useEffect, useState } from 'react';
import Task from './Task';
import { getAllTodos } from '../services/todos';
import Loader from './Loader';

function Table() {
    const [todos, setTodos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getAllTodos()
            .then((data) => {
                setTodos(Object.values(data));
                setIsLoading(false);
            })
            .catch((err) => console.log(err));
    }, []);


    return (
        <>
            <div className="table-wrapper">

                {/* Loading spinner - show the load spinner when fetching the data from the server */}
                {isLoading && <Loader />}

                <table className="table">
                    <thead>
                        <tr>
                            <th className="table-header-task">Task</th>
                            <th className="table-header-status">Status</th>
                            <th className="table-header-action">Action</th>
                        </tr>
                    </thead>

                    <tbody>

                        {todos.map(todo => 
                            <Task 
                                key={todo._id} 
                                isCompleted={todo.isCompleted} 
                                task={todo.text} 
                            />
                        )}
                        
                    </tbody>
                </table>
                </div>
        </>
    );
}

export default Table;
