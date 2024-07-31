import { useEffect, useState } from 'react';
import TablePagination from './TablePagination';
import TableSearchBar from './TableSearchBar';
import TableWrapper from './table/TableWrapper';

const baseUrl = 'http://localhost:3030/jsonstore';

function UserSection({  
    openCreateUserModal,
    openUserDetailsModal,
    openDeleteUserModal,
    deleteUserId,
}) {
    const [users, setUsers] = useState([]);
    const [showLoader, setShowLoader] = useState(false);

    useEffect(() => {
        setShowLoader(true);
        fetch(`${baseUrl}/users`)
        .then(res => res.json())
        .then(data => {
            setUsers(Object.values(data));
            setShowLoader(false);
        })
        .catch(err => console.log(err));
    }, []);

    // useEffect(() => {
    //     (async function getUsers() {
    //         try {
    //             const response = await fetch(`${baseUrl}/users`);
    //             const result = await response.json();
    //             const data = Object.values(result);
    
    //             setUsers(data);
    //         } catch(err) {
    //             console.log(err);
    //         }
    //     })();
    // }, []);


    return (
        <>
            <section className="card users-container">

                <TableSearchBar />

                <TableWrapper 
                    users={users} 
                    showLoader={showLoader}
                    openUserDetailsModal={openUserDetailsModal}
                    openDeleteUserModal={openDeleteUserModal}
                />

                <button 
                    className="btn-add btn" 
                    onClick={openCreateUserModal}
                >
                    Add new user
                </button>

                <TablePagination />
            </section>
        </>
    );
}

export default UserSection;
