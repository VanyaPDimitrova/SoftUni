import Loading from './Loading';
import Table from './Table';

function TableWrapper({ 
    users, 
    showLoader,
    openUserDetailsModal,
    openDeleteUserModal,
 }) {
    return (
        <div className="table-wrapper">
            {showLoader && 
                <Loading />
            }

            <Table 
                users={users} 
                openUserDetailsModal={openUserDetailsModal} 
                openDeleteUserModal={openDeleteUserModal}
            />
        </div>
    );
}

export default TableWrapper;
