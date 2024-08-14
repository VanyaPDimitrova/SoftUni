import { STUDENT_ROLE, TEACHER_ROLE } from '../../common/constants';
import styles from './LogInRegister.module.css';

function Register({ closeModal }) {
    return (
        <div className={styles.container}>
            <form className={styles.login}>
                <div className={styles.data}>
                    <div className="field">
                        <label htmlFor="email">Email: </label>
                        <input 
                            type="email" 
                            id='email' 
                            name='email' 
                            placeholder='pesho@abv.bg'
                        />
                    </div>

                    <div className="field">
                        <label htmlFor="password">Password: </label>
                        <input 
                            type="password"
                            id='password' 
                            name='password' 
                        />
                    </div>

                    <div className="field">
                        <label htmlFor="password">Role: </label>
                        <select 
                            type="password"
                            id='password' 
                            name='password' 
                            placeholder='student/teacher'
                        >
                              <option value={STUDENT_ROLE}>Student</option>
                              <option value={TEACHER_ROLE}>Teacher</option>
                        </select>
                    </div>
                </div>

                <div className={styles.buttons}>
                    <button type="submit" className={styles.submitBtn}>Register</button>
                    <button className='cancelBtn' onClick={closeModal}>Cancel</button>
                </div>
            </form>
        </div>
    );
}

export default Register;