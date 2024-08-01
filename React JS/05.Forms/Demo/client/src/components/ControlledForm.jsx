import { useEffect, useRef, useState } from 'react';

function ControlledForm() {
    const [formValues, setFormValues] = useState({
        username: '',
        password: '',
        email: '',
        age: '',
        sex: 'm',
        bio: '',
        occupation: 'qa'
    });

    const inputRer = useRef();
    useEffect(() => {
        inputRer.current.focus();
    }, []);


    useEffect(() => {
        (async () => {
            const response = await fetch('http://localhost:3030/jsonstore/advanced/profiles/fb352199-bcbc-4e1d-a1dc-ed346a6fb49a');
            const user = await response.json();
            setFormValues((formValues) => ({...formValues, username: user.username}));
        }
        )();
    }, []);

    const formSubmitHandler = (e) => {
        e.preventDefault();
        console.log(e.currentTarget);
    };

    const formValuesChangeHAndler = (e) => {
        setFormValues((formValues) => ({...formValues, [e.target.name]: e.target.value}));
    };

    return (
        <>
            <h1>Controlled Form</h1>

            <form onSubmit={formSubmitHandler}>
                <div>
                    <label htmlFor="username">Username </label>
                    <input 
                        type="text" 
                        ref={inputRer}
                        name='username' 
                        id='username'
                        value={formValues.username}
                        onChange={formValuesChangeHAndler}
                    />
                </div>

                <div>
                    <label htmlFor="password">Password </label>
                    <input 
                        type="password" 
                        name='password' 
                        id='password'
                        value={formValues.password}
                        onChange={formValuesChangeHAndler}
                    />
                </div>

                <div>
                    <label htmlFor="email">Email </label>
                    <input 
                        type="email" 
                        name='email' 
                        id='email'
                        value={formValues.email}
                        onChange={formValuesChangeHAndler}
                    />
                </div>

                <div>
                    <label htmlFor="age">Age </label>
                    <input 
                        type="number" 
                        name='age' 
                        id='age'
                        value={formValues.age}
                        onChange={formValuesChangeHAndler}
                    />
                </div>

                <div style={{ padding: '10px' }}>
                    <span style={{ padding: '10px' }}>Sex: </span>
                    <label htmlFor="sex-m">Male </label>
                    <input 
                        type="radio" 
                        name='sex' 
                        id='sex-m'
                        value='m'
                        onChange={formValuesChangeHAndler}
                        checked={formValues.sex === 'm'}
                    />
                    <label htmlFor="sex-f">Female </label>
                    <input 
                        type="radio" 
                        name='sex' 
                        id='sex-f'
                        value='f'
                        onChange={formValuesChangeHAndler}
                        checked={formValues.sex === 'f'}
                    />
                </div>

                <div>
                    <label htmlFor="sports">Sports</label>
                    <input 
                        type="checkbox" 
                        name=''
                        id=''
                    />
                </div>

                <div>
                    <label htmlFor="bio">Bio</label>
                    <textarea 
                        name="bio" 
                        id="bio" 
                        value={formValues.bio}
                        onChange={formValuesChangeHAndler}
                    />
                </div>

                <div>
                    <label htmlFor="occupation">Occupation </label>
                    <select 
                        name="occupation" 
                        id="occupation"
                        value={formValues.occupation}
                        onChange={formValuesChangeHAndler}
                    >
                        <option value="dev">Dev</option>
                        <option value="ba">Ba</option>
                        <option value="qa">QA</option>
                    </select>
                </div>

                <input type="submit" value="Login" />
            </form>

        </>
    );
}

export default ControlledForm;
