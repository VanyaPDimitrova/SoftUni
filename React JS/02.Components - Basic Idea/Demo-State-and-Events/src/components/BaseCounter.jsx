import { useState } from 'react';

function BaseCounter() {
    let [baseCount, setBaseCount] = useState(0);
    
    const decreaseCounter = () => setBaseCount(count => --count);
    const increaseCounter = () => setBaseCount(count => ++count);
    const resetCounter = () => setBaseCount(() => 0);

    return (
        <>
            <h2>Counter</h2>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <button onClick={decreaseCounter}>-</button> 
                <p style={{padding: '0 10px'}}>{baseCount}</p>
                <button onClick={increaseCounter}>+</button>
            </div>
            <button onClick={resetCounter}>reset</button> 
        </>
    );
}

export default BaseCounter;
