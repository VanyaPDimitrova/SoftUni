import AllCategoriesPrivate from '../quizCategories/AllCategoriesPrivate';
import styles from './Home.module.css';

function HomeTeacher() {

    return (
        <section className={`${styles.home} ${styles.teacher}`}> 
            <div className={styles.container}>
                <h1>Hello Teacher</h1>

                <div className={styles.categories}>
                    <h2>Categories</h2>   
                    <AllCategoriesPrivate />
                </div>
            </div>
        </section>
    );
}

export default HomeTeacher;