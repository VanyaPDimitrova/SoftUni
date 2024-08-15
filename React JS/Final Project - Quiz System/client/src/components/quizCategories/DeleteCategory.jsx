function DeleteCategory({
    closeModal,
    deleteCategory,
    categoryToDelete,
}) {
    return (
        <div className="confirm-container">
            <p>Are you sure you want to delete <strong>{`${categoryToDelete.category}`}</strong> category?</p>

            <div className="actions">
                <div id="form-actions">
                    <button 
                        id="action-save" 
                        className="btn" 
                        type="submit" 
                        onClick={deleteCategory}
                    >
                        Delete
                    </button>

                    <button 
                        id="action-cancel" 
                        className="btn" 
                        type="button"
                        onClick={closeModal}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DeleteCategory;