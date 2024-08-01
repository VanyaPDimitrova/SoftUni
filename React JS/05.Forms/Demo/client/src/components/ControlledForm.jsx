import { useEffect, useState } from 'react';

function ControlledForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        (async () => {
            const response = await fetch('http://localhost:3030/jsonstore/advanced/profiles/fb352199-bcbc-4e1d-a1dc-ed346a6fb49a');
            const user = await response.json();
            setUsername(user.username);
        }
        )();
    }, []);

    const formSubmitHandler = (e) => {
        e.preventDefault();
        console.log('Form submit');
    };

    const usernameChangeHandler = (e) => {
        setUsername(e.target.value);
    };

    const passwordChangeHandler = (e) => {
        setPassword(e.target.value);
    };

    return (
        <>
            <h1>Controlled Form</h1>

            <form onSubmit={formSubmitHandler}>
                <div>
                    <label htmlFor="username">Username </label>
                    <input 
                        type="text" 
                        name='username' 
                        id='username'
                        value={username}
                        onChange={usernameChangeHandler}
                    />
                </div>

                <div>
                    <label htmlFor="password">Password </label>
                    <input 
                        type="password" 
                        name='password' 
                        id='password'
                        value={password}
                        onChange={passwordChangeHandler}
                    />
                </div>

                <input type="submit" value="Login" />
            </form>

        </>
    );
}

export default ControlledForm;
