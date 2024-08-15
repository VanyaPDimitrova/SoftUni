import { useEffect, useState } from 'react';
import { Link, useParams, redirect } from 'react-router-dom';

import { getCategoryQuizzes } from '../../requests/quizzes-requester';

import Spinner from '../common/spinner/Spinner';

import styles from './Quizzes.module.css';

function CategoryQuizzes() {
    const [categoryQuizzes, setCategoryQuizzes] = useState([]);
    const [showSpinner, setShowSpinner] = useState(false);
    
    const { categoryId, category } = useParams();

    useEffect(() => {
        setShowSpinner(true);

        getCategoryQuizzes()
            .then(result => {
                    const data = Object.values(result);
                    setCategoryQuizzes(data);
                    setShowSpinner(false);
                })
            .catch(err => {
                setShowSpinner(false);
                console.log(err);
            });
    }, []);
    

    return (
        <section className={`${styles.home} ${styles.public}`}> 
            <div className={styles.container}>
                <h1>{category} Quizzes</h1>
                
                <div className={styles.categoryQuizzes}>
                    {showSpinner &&
                        <Spinner />
                    }
                    <ul>
                        {categoryQuizzes
                            .filter(quiz => quiz._categoryId == categoryId)
                            .map(quiz => 
                                <li key={quiz._id}>                                   
                                    <h3>{quiz.title}</h3>
                                
                                    <Link to='/' >Solve</Link>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default CategoryQuizzes;
