import Loading from './Loading';
import Table from './Table';

function TableWrapper({ users }) {
    return (
        <div className="table-wrapper">
            {/* {users && 
                <Loading />
            } */}

            <Table users={users} />
        </div>
    );
}

export default TableWrapper;
