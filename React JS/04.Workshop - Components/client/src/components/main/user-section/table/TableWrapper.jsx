import Loading from './Loading';
import Table from './Table';

function TableWrapper({ users }) {
    return (
        <div className="table-wrapper">
            {users.length === 0 && 
                <Loading />
            }

            <Table users={users} />
        </div>
    );
}

export default TableWrapper;
