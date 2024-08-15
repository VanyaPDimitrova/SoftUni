import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../context/AuthContext';
import { deleteCategoryById, getAllCategoriesPrivate } from '../../requests/categories-requests';

import Spinner from '../common/spinner/Spinner';

import styles from './AllCategories.module.css';
import DeleteCategoryModal from './DeleteCategoryModal';

function AllCategoriesPrivate() {
    const { isAuthenticated, role } = useContext(AuthContext);
    const [categories, setCategories] = useState([]);
    const [showSpinner, setShowSpinner] = useState(false);
    
    useEffect(() => {
        setShowSpinner(true);

        getAllCategoriesPrivate()
            .then(result => {
                    const data = Object.values(result);
                    setCategories(data);
                    setShowSpinner(false);
                })
            .catch(err => {
                setShowSpinner(false);
                console.log(err);
            });
    }, []);



// Delete Category
    const [isDeleteCategoryModalOpen, setIsDeleteCategoryModalOpen] = useState(false);
    const [categoryToDelete, setCategoryToDelete] = useState({});

    function openDeleteCategoryModal(category) {
        setIsDeleteCategoryModalOpen(true);
        setCategoryToDelete(category);
    }

    async function deleteCategory() {
        await deleteCategoryById(categoryToDelete._id);

        setCategories(categories => categories.filter(category => category._id !== categoryToDelete._id));
        setIsDeleteCategoryModalOpen(false);
    }


// Create Category
    const createCategory = () => {
        console.log('createCategory');
        
    }

    return (
        <>
            <div className={styles.allCategories}>
                {showSpinner &&
                    <Spinner />
                }
                <ul >
                    {categories.map(category => 
                            <li key={category._id}>
                                <details>
                                    <summary>
                                        <span>{category.category}</span>
                                        <div className="buttons">
                                            <button onClick={() => openDeleteCategoryModal(category)} >Delete</button>
                                            <button>Update</button>
                                            <Link to={'/categories/${category._id}/quizzes'}>Quizzes</Link>
                                        </div>
                                    </summary> 
                                    
                                    <p>{category.description}</p> 
                                </details>
                            </li>
                        )
                    }
                </ul>

                <button onClick={createCategory}>Create category</button>
            </div>

                            
            {isDeleteCategoryModalOpen &&
                <DeleteCategoryModal
                    closeDeleteCategoryModal={() => setIsDeleteCategoryModalOpen(false)}
                    deleteCategory={deleteCategory}
                    categoryToDelete={categoryToDelete} 
                />
            }
        </>
    );
}

export default AllCategoriesPrivate;
