function DeleteCategory({
    closeModal,
    deleteCategory,
    categoryToDelete,
}) {
    return (
        <div className="containerDelete">
            <p>Are you sure you want to delete <strong>{`${categoryToDelete.category}`}</strong> category?</p>

            <div className="actions">
                <button 
                    id="action-delete" 
                    className="btn" 
                    type='submit'
                    onClick={deleteCategory}
                >
                    Delete
                </button>

                <button 
                    id="action-cancel" 
                    className="btn"
                    onClick={closeModal}
                >
                    Cancel
                </button>
            </div>
        </div>
    );
}

export default DeleteCategory;