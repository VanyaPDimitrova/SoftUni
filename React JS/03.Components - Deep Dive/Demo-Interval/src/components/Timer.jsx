import { useEffect, useState } from 'react';

function Timer() {
    const [time, setTime] = useState(0);
    const [tens, setTens] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            console.log('interval');
            setTime(time => time + 1);
        }, 1000);

        if (time % 10 == 0 && time > 0) {
            setTens(tens => tens + 10);
        }

        return () => clearInterval(interval);
    }, [time]); 


    return (
        <>
            <h2>Timer</h2>

            <p>{time}</p>

            <p>{tens}</p>
        </>
    );
}

export default Timer;