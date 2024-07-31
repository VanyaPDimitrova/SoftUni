import Loading from './Loading';
import Table from './Table';

function TableWrapper({ users, showLoader }) {
    return (
        <div className="table-wrapper">
            {showLoader && 
                <Loading />
            }

            <Table users={users} />
        </div>
    );
}

export default TableWrapper;
