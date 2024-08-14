import styles from './Modal.module.css';

function Modal({ close, header, content }) {
    return(
        <div className={styles.overlay} onClick={close}>
            <div className={styles.modal} onClick={e => e.stopPropagation()} >
                <div className={styles.container}>
                    <header className={styles.headers}>
                        {header}
                
                        <button className={styles.btnClose} onClick={close}>                            
                            <i className="fa-solid fa-square-xmark"></i>                        
                        </button>
                    </header>

                    {content}
                </div>
            </div>
        </div>
    );
}
export default Modal;
