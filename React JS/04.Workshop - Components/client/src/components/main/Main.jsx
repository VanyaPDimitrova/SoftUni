import { useState } from 'react';
import UserSection from './user-section/UserSection';
import CreateUserModal from './user-modals/CreateUserModal';
import UserDetailsModal from './user-modals/UserDetailsModal';
import DeleteUserModal from './user-modals/DeleteUserModal';
import { createNewUser } from '../../services/users';

function Main() {
    const [isCreateUserModalOpen, setIsCreateUserModalOpen] = useState(false);
    const [newUser, setNewUser] = useState({});
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

    const createUser = async (e) => {
        // prevent refresh
        e.preventDefault();

        // get user data
        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData);
        const userDataWithDates = {...userData, createdAt: new Date(), updatedAt: new Date()};

        const newUSer = await createNewUser(userDataWithDates);

        // update local state
        setNewUser(newUSer);

        // close modal
        setIsCreateUserModalOpen(false);
    }

    return (
        <>
            <main className="main">

                <UserSection 
                    openCreateUserModal={() => setIsCreateUserModalOpen(true)}
                    openUserDetailsModal={openUserDetailsModal}
                    openDeleteUserModal={openDeleteUserModal}
                    deleteUserId={deleteUserId}
                    newUser={newUser}
                />


                {isUserDetailsModalOpen && 
                    <UserDetailsModal
                        closeUserDetailsModal={() => setIsUserDetailsModalOpen(false)}
                        userDetails={userDetails}
                    />
                }

                {isCreateUserModalOpen && 
                    <CreateUserModal 
                        closeCreateUserModal={() => setIsCreateUserModalOpen(false)} 
                        createUser={createUser}
                    />
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
