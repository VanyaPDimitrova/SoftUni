import { useState } from 'react';

function Timer() {
    let [timer, setTimer] = useState(0);

    setTimeout(() => {
        setTimer(timer + 1);
    }, 1000);

    return (
        <>
            <h2>Timer</h2>
        
            <p>{timer}</p>
        </>
    );
}

export default Timer;
