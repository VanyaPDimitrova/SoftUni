import { useState } from 'react';

function UncontrolledForm() {
    const [user, setUser] = useState({});

    const formSubmitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        setUser({
            username: formData.get('username')
        });
    };

    const logoutHandler = () => {
        setUser({});
    };

    const handler = (e) => {
        console.log(e.target.value);
    };
    

    return (
        <>
            <h1>Uncontrolled Form</h1>

            {user.username 
                ? <p>Hello {user.username}! <button onClick={logoutHandler}>Logout</button> </p>
                : (
                    <form onSubmit={formSubmitHandler}>
                        <div>
                            <label htmlFor="username">Username </label>
                            <input type="text" name='username' id='username' onInput={handler}/>
                        </div>

                        <div>
                            <label htmlFor="password">Password </label>
                            <input type="password" name='password' id='password'/>
                        </div>

                        {/* <input type="submit" value="Login" onClick={submitButtonClickHandler}/> */}
                        <input type="submit" value="Login" />
                    </form>
                )
            }

        </>
    );
}

export default UncontrolledForm;
