import { useNavigate } from 'react-router-dom';
import { login } from '../requests/auth-requester';
import styles from './LogInRegister.module.css';
import { useState } from 'react';

function LogIn({ closeModal }) {
    const [values, setValues] = useState({ 
                                    email: '', 
                                    password: '' 
                                });
    
    const changeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    };

    const submitHandler = (e) => {
        e.preventDefault();

        login(values)
            .then(data => {
                console.log(data);
                closeModal();
            })
            .catch(err => console.log(err.message));
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
                            placeholder='peter@abv.bg'
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
                            placeholder='123456'
                        />
                    </div>
                </div>

                <div className={styles.buttons}>
                    <button type="submit" className={styles.submitBtn}>Login</button>
                    <button className='cancelBtn' onClick={closeModal}>Cancel</button>
                </div>
            </form>
        </div>
    );
}

export default LogIn;