import { useEffect, useState } from 'react';

import { getAllCategoriesPublic } from '../../requests/categories-requests';
import styles from './AllCategories.module.css';
import Spinner from '../common/spinner/Spinner';
import { Link } from 'react-router-dom';

function AllCategories() {
    const [categories, setCategories] = useState([]);
    const [showSpinner, setShowSpinner] = useState(false);

    useEffect(() => {
        setShowSpinner(true);

        getAllCategoriesPublic()
            .then(result => {
                    const data = Object.values(result);
                    setCategories(data);
                    setShowSpinner(false);
                })
            .catch(err => {
                setShowSpinner(false);
                console.log(err);
            });
    }, [])

    const onButtonClick = () => {

    }

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
                                    <Link to={'/categories/${category._id}/quizzes'} onClick={onButtonClick}>Quizzes</Link>
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

export default AllCategories;
