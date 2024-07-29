import AddButton from './AddBtn';
import Table from './Table';

function Main() {
    return (
        <>
            <main className="main">
                <section className="todo-list-container">
                    <h1>Todo List</h1>

                    <AddButton />
                    
                    <Table />
                </section>
            </main>
        </>
    );
}

export default Main;
