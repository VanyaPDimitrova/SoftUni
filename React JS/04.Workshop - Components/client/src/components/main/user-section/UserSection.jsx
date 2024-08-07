import { useEffect, useState } from 'react';
import TablePagination from './TablePagination';
import TableSearchBar from './TableSearchBar';
import TableWrapper from './table/TableWrapper';
import { getAllUsers } from '../../../services/users';


function UserSection({  
    openCreateUserModal,
    openUserDetailsModal,
    openDeleteUserModal,
    deleteUserId,
    newUser,
}) {
    const [users, setUsers] = useState([]);
    const [showLoader, setShowLoader] = useState(false);

    useEffect(() => {
        setShowLoader(true);

        getAllUsers()
            .then(data => {
                setUsers(Object.values(data));
                setShowLoader(false);
            })
            .catch(err => {
                setShowLoader(false);
                console.log(err);
            });
    }, []);

    /*
        useEffect(() => {
        (async function getUsers() {
            try {
                const response = await fetch(`${baseUrl}/users`);
                const result = await response.json();
                const data = Object.values(result);
    
                setUsers(data);
            } catch(err) {
                console.log(err);
            }
        })();
    }, []);
    */

    useEffect(() => {
        if (Object.keys(newUser).length != 0) {
            setUsers(users => [...users, newUser]);
        }
    }, [newUser]);

    useEffect(() => {
        setUsers(users => users.filter(user => user._id !== deleteUserId));
    }, [deleteUserId]);


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
