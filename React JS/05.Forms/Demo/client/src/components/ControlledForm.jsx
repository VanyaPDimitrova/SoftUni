import { useEffect, useState } from 'react';

function ControlledForm() {
    const [user, setUser] = useState({
        _id: '',
        username: '',
        email: '',
        age: '',
    });

    useEffect(() => {
        (async () => {
            const response = await fetch('http://localhost:3030/jsonstore/advanced/profiles/fb352199-bcbc-4e1d-a1dc-ed346a6fb49a');
            const data = await response.json();
            setUser(data);
        }
        )();
    }, []);

    const formSubmitHandler = (e) => {
        e.preventDefault();
        console.log(user);
    };

    const changeUserValuesHAndler = (e) => {
        console.log(e.target.value);
        setUser((user) => ({...user, [e.target.name]: e.target.value}));
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
                        value={user.username}
                        onChange={changeUserValuesHAndler}
                    />
                </div>

                <div>
                    <label htmlFor="password">Password </label>
                    <input 
                        type="password" 
                        name='password' 
                        id='password'
                    />
                </div>

                <input type="submit" value="Login" />
            </form>

        </>
    );
}

export default ControlledForm;
