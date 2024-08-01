import { useEffect, useState } from 'react';

function ControlledForm() {
    const [formValues, setFormValues] = useState({
        username: '',
        password: '',
    });

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

                <input type="submit" value="Login" />
            </form>

        </>
    );
}

export default ControlledForm;
