import styles from './Home.module.css';
function Home() {

    return (
        <section className={styles.home}> 
            <div className={styles.container}>
                <h1>Let's do QUIZ</h1>
                
                <div className={styles.categories}>
                    <h2>All quiz topics</h2>    
                    
                </div>
            </div>
        </section>
    );
}

export default Home;