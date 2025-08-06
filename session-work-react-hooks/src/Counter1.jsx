import { useState } from 'react';

function Counter1() {

    //let count = 0;

    const [count, setCount] = useState(0);

    let handleClickIncrement = () => {
        setCount((count) => count + 1)
        console.log("count1 = ", count)
       // setCount((count) => count + 1)
       // console.log("count2 = ", count)
    }

     let handleClickDecrement = () => {
        setCount((count) => count - 1)
        console.log("count1 = ", count)
       
    }

    return (
        <>
             <h1> Count = {count} </h1>
            <button onClick={handleClickIncrement}> Increment </button>
            <button onClick={() => setCount((count) => count - 1)}> Decrement </button>
            <button onClick={() => setCount(0)}> Reset </button>
            
        </>

    );


}


export default Counter1