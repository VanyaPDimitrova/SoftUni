// Не работи!!! Защото елементите се закачат първоначално към DOM дървото със стойност 0 и след това, когато функцията setInterval() промени стойността на count, нищо не указва на React за тази промяна и той не променя vDOM и от тук не се променя и DOM дървото!!!
// В същото време функцията setInterval си работи в паметта и променя count.

function TimerWithoutState() {
    let timer = 0;

    setInterval(() => {
        timer++;
    }, 1000);

    return (
        <>
            <h2>Timer</h2>
        
            <p>{timer}</p>
        </>
    );
}

export default TimerWithoutState;
