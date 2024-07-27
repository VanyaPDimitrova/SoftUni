import { useState } from 'react';

function Counter() {
    let [count, setCount] = useState(0);

    let color = count < 0 ? 'red' : 'green';
    const decreaseCounter = () => setCount(count => --count);
    const increaseCounter = () => setCount(count => ++count);
    const resetCounter = () => setCount(() => 0);

    return (
        <>
            <h2>Counter</h2>
            <div 
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <button onClick={decreaseCounter}>-</button> 

                <p 
                    style={{
                        padding: '0 15px',
                        color,
                        fontWeight: 'bold',
                        fontSize: '20px',
                    }}
                >
                    {count}
                </p>

                <button onClick={increaseCounter}>+</button>
            </div>

            <button onClick={resetCounter}>Reset</button> 
        </>
    );
}

export default Counter;
