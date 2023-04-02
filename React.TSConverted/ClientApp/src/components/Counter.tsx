import React, { useState } from 'react';

interface Props {
    currentCount?: number;
}

const Counter: React.FC<Props> = ({ currentCount }) => {
    const [count, setCounter] = useState<number>(currentCount ?? 0);    

    function incrementCounter() {
        console.log(count)
        setCounter(count + 1);
    }

    return (
        <div>
            <h1>Counter</h1>
            <p>This is a simple example of a React component.</p>
            <p aria-live="polite">Current count: <strong>{count}</strong></p>
            <button className="btn btn-primary" onClick={incrementCounter}>Increment</button>
        </div>
    )

};

export default Counter;