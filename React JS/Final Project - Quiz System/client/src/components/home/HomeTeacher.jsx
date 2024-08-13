import AllCategories from '../quizCategories/AllCategories';
import styles from './Home.module.css';

function HomeTeacher() {

    return (
        <section className={`${styles.home} ${styles.teacher}`}> 
            <div className={styles.container}>
                <h1>Teacher Home Page </h1>
            </div>
        </section>
    );
}

export default HomeTeacher;