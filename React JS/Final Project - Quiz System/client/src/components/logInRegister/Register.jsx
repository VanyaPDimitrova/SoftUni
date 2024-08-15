import { useContext, useState } from 'react';

import { STUDENT_ROLE, TEACHER_ROLE } from '../../common/constants';
import { register } from '../../requests/auth-requester';
import { AuthContext } from '../../context/AuthContext';

import styles from './LogInRegister.module.css';

function Register({ closeModal }) {
    const initialValue = { 
        email: '', 
        password: '',
        role: STUDENT_ROLE, 
    };
    const [values, setValues] = useState(initialValue);
    const [error, setError] = useState('');
    
    const { changeAuthState } = useContext(AuthContext);                            
    
    const changeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    };

    const submitHandler = (e) => {
        e.preventDefault();

        register(values)
            .then(data => {
                if (!data.email) {
                    throw new Error(data.message);
                }  
                
                changeAuthState(data);
                closeModal();
            })
            .catch(err => setError(err));
    };

    
    return (
        <div className={styles.container}>
            <form className={styles.login} onSubmit={submitHandler}>
                <div className={styles.data}>
                    <div className="field">
                        <label htmlFor="email">Email: </label>
                        <input 
                            type="email" 
                            id='email' 
                            name='email'
                            value={values.email}
                            onChange={changeHandler}
                            placeholder='pesho@abv.bg'
                        />
                    </div>

                    <div className="field">
                        <label htmlFor="password">Password: </label>
                        <input 
                            type="password"
                            id='password' 
                            name='password' 
                            value={values.password}
                            onChange={changeHandler}
                        />
                    </div>

                    <div className="field">
                        <label htmlFor="role">Role: </label>
                        <select 
                            type="role"
                            id='role' 
                            name='role' 
                            value={values.role}
                            onChange={changeHandler}
                            placeholder='student/teacher'
                        >
                              <option value={STUDENT_ROLE}>Student</option>
                              <option value={TEACHER_ROLE}>Teacher</option>
                        </select>
                    </div>
                </div>

                {error ? (
                    <div className={styles.error}>
                        <p>{error}</p>
                    </div>
                ): null}

                <div className={styles.buttons}>
                    <button type="submit" className={styles.submitBtn}>Register</button>
                    <button className='cancelBtn' onClick={closeModal}>Cancel</button>
                </div>
            </form>
        </div>
    );
}

export default Register;