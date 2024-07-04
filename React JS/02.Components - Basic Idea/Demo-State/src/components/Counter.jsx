import { useState } from 'react';

function Counter() {
    let [count, setCount] = useState(0);

    setTimeout(() => {
        setCount(count + 1);
    }, 1000);

    return (
        <>
            <h2>Counter</h2>
        
            <p>{count}</p>
        </>
    );
}

export default Counter;
