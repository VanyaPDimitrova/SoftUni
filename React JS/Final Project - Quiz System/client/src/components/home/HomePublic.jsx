import AllCategories from '../quizCategories/AllCategories';
import styles from './Home.module.css';

function HomePublic() {

    return (
        <section className={`${styles.home} ${styles.public}`}> 
            <div className={styles.container}>
                <h1>Let's do <span className={styles.font}>
                        <span className={styles.blue}>
                            Q
                        </span>
                        <span className={styles.yellow}>
                            U
                        </span>
                        <span className={styles.red}>
                            I
                        </span>
                        <span className={styles.green}>
                            Z
                        </span>
                        
                    </span>  
                </h1>
                
                <div className={styles.categories}>
                    <h2>All quiz topics</h2>   
                    <AllCategories />
                </div>
            </div>
        </section>
    );
}

export default HomePublic;