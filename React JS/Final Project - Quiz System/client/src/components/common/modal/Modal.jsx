import styles from './Modal.module.css';

function Modal({ open, close, header, content }) {
    return(
        <>
            {open && 
                <div className={styles.overlay} onClick={close}>
                    <div className={styles.modal} onClick={e => e.stopPropagation()} >
                        <div className={styles.container}>
                            <header className={styles.headers}>
                                <h2>{header}</h2>
                        
                                <button className={styles.btnClose} onClick={close}>                            
                                    <i className="fa-solid fa-square-xmark"></i>                        
                                </button>
                            </header>
    
                            {content}
                        </div>
                </div>
            </div>
            }
        </>
    );
}
export default Modal;
