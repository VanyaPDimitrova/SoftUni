import { useEffect, useState } from 'react';

function Timer() {
    console.log('Render Timer');
    const [time, setTime] = useState(0);
    const [tens, setTens] = useState(0);

    useEffect(() => {
        console.log('useEffect');
        const interval = setInterval(() => {
            console.log('setInterval');
            setTime(time => time + 1);
        }, 1000);

        if (time % 10 == 0 && time > 0) {
            console.log('setTens');
            setTens(tens => tens + 10);
        }

        return () => {
            console.log('clearInterval');
            if (time == 20) {
                setTime(() => 1);
            }
            clearInterval(interval);
        };
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