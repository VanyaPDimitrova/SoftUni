import Modal from '../common/modal/Modal';
import CreateCategory from './CreateCategory';

function CreateCategoryModal({ closeCreateCategoryModal, setCategories }) {
    const modalHeader = <h3>Create Category</h3>;
    
    return (
        <Modal
            close={closeCreateCategoryModal} 
            header={modalHeader}
            content={<CreateCategory 
                        closeModal={closeCreateCategoryModal} 
                        setCategories={setCategories} 
                    />}
        />
    );
}

export default CreateCategoryModal;