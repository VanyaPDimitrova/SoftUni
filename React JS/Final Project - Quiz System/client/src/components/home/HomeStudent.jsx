import styles from './Home.module.css';

function HomeStudent() {

    return (
        <section className={`${styles.home} ${styles.student}`}>
            <div className={styles.container}>
                <h1>Student Home Page </h1>
                
            </div>
        </section>
    );
}

export default HomeStudent;