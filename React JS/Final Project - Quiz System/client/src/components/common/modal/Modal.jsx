import styles from './Modal.module.css';

function Modal({ close, header, content }) {
    return (
        <div className={styles.overlay}>
            <div className={styles.backdrop} onClick={close}>
                <div className={styles.modal} onClick={e => e.stopPropagation()} >
                    <div className={styles.container}>
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
