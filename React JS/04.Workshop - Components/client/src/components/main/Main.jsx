import { useState } from 'react';
import UserSection from './user-section/UserSection';
import CreateUserModal from './user-modals/CreateUserModal';
import UserDetailsModal from './user-modals/UserDetailsModal';
import DeleteUserModal from './user-modals/DeleteUserModal';

function Main() {
    const [isCreateUserModalOpen, setIsCreateUserModalOpen] = useState(false);
    const [isUserDetailsModalOpen, setIsUserDetailsModalOpen] = useState(false);
    const [userDetails, setUserDetails] = useState({});
    const [isDeleteUserModalOpen, setIsDeleteUserModalOpen] = useState(false);
    const [deleteUserId, setDeleteUserId] = useState('');

    function openUserDetailsModal(user) {
        setUserDetails(user);
        setIsUserDetailsModalOpen(true);
    }

    function openDeleteUserModal(userId) {
        setIsDeleteUserModalOpen(true);
        setDeleteUserId(userId);
    }
    
    function deleteUser() {
        console.log(deleteUserId);
        setIsDeleteUserModalOpen(false);
    }

    return (
        <>
            <main className="main">

                <UserSection 
                    openCreateUserModal={() => setIsCreateUserModalOpen(true)}
                    openUserDetailsModal={openUserDetailsModal}
                    openDeleteUserModal={openDeleteUserModal}
                    deleteUserId={deleteUserId}
                />


                {isUserDetailsModalOpen && 
                    <UserDetailsModal
                        closeUserDetailsModal={() => setIsUserDetailsModalOpen(false)}
                        userDetails={userDetails}
                    />
                }

                {isCreateUserModalOpen && 
                    <CreateUserModal closeCreateUserModal={() => setIsCreateUserModalOpen(false)} />
                }

                {isDeleteUserModalOpen &&
                    <DeleteUserModal 
                        closeDeleteUserModal={() => setIsDeleteUserModalOpen(false)} 
                        deleteUser={deleteUser}
                    />
                }

            </main>
        </>
    );
}

export default Main;
