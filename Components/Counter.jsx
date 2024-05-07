import React, { useState, useEffect } from 'react';

function Counter() {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const timerId = setInterval(() => {
            setCounter(counter => counter + 1);
        }, 1000);

        return () => clearInterval(timerId); // Clean after every interval
    }, []); 

    // Reset button
    function resetCounter() {
        setCounter(0);
    }

    return (
        <div className="pt-5 pb-5 mt-5 mb-5">
            <div className='bg-light text-center text-dark pb-5 pt-5 mt-5 mb-5'>
                <div>
                    <h2 style={{color:'crimson',fontWeight:'bold'}}>Counter</h2>
                    <h3>{counter}</h3>
                    <button className='btn btn-danger text-light shadow mt-2' onClick={resetCounter}>Reset</button>
                </div>
            </div>
        </div>
    );
}

export default Counter;