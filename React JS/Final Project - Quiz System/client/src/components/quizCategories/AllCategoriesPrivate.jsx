import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../context/AuthContext';
import { getAllCategoriesPrivate } from '../../requests/categories-requests';

import Spinner from '../common/spinner/Spinner';

import styles from './AllCategories.module.css';

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

    return (
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
                                    <Link to={'/categories/${category._id}/quizzes'}>Quizzes</Link>
                                </summary> 
                                
                                <p>{category.description}</p> 
                            </details>
                        </li>
                    )
                }
            </ul>
        </div>
    );
}

export default AllCategoriesPrivate;
