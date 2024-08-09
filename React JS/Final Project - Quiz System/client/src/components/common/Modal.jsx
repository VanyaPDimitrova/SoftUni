import styles from './Modal.module.css';

function Modal({ close, container, header, content }) {
    return (
        <div className={styles.overlay}>
            <div className={styles.backdrop} onClick={close}>
                <div className={styles.modal}>
                    <div className={container}>
                        <header className={styles.headers}>
                            <h2>{header}</h2>
                    
                            <button className={styles.btnClose} onClick={close}>                            
                                <i class="fa-solid fa-square-xmark"></i>                        
                            </button>
                        </header>

                        {content}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;
