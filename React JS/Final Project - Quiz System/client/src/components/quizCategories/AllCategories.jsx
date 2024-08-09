import { useEffect, useState } from 'react';
import { getAllCategories } from '../requests/categories-requests';
import styles from './AllCategories.module.css';
import Spinner from '../common/spinner/Spinner';

function AllCategories() {
    const [categories, setCategories] = useState([]);
    const [showSpinner, setShowSpinner] = useState(false);

    useEffect(() => {
        setShowSpinner(true);

        getAllCategories()
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

    return (
        <div className={styles.allCategories}>
            {showSpinner &&
                <Spinner />
            }
            <ul>
                {categories.map(category => 
                        <li key={category.id} >
                            {category.category}
                        </li>
                    )
                }
            </ul>
        </div>
    );
}

export default AllCategories;
