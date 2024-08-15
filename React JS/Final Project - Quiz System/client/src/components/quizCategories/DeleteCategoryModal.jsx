import Modal from '../common/modal/Modal';
import DeleteCategory from './DeleteCategory';

function DeleteCategoryModal({ closeDeleteCategoryModal, deleteCategory, categoryToDelete }) {
    const modalHeader = <h3>Delete Category</h3>;
    
    return (
        <Modal
            close={closeDeleteCategoryModal} 
            header={modalHeader}
            content={<DeleteCategory 
                        closeModal={closeDeleteCategoryModal} 
                        deleteCategory={deleteCategory} 
                        categoryToDelete={categoryToDelete}
                    />}
        />
    );
}

export default DeleteCategoryModal;
