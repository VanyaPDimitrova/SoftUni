import styles from './Main.module.css';
function Home() {
    return (
        <section className={styles.home}> 
            <div className={styles.container}>
                <h1>Hello from Home</h1>

            </div>
        </section>
    );
}

export default Home;