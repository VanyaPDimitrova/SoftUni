import Loading from './Loading';
import Table from './Table';

function TableWrapper({ 
    users, 
    showLoader,
    openUserDetailsModal,
 }) {
    return (
        <div className="table-wrapper">
            {showLoader && 
                <Loading />
            }

            <Table users={users} openUserDetailsModal={openUserDetailsModal} />
        </div>
    );
}

export default TableWrapper;
