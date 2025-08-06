// Increment the count value
// Component UI is rendered only once - first time rendering of component
// <Counter/> - 
// life cycle - componentMount
// So solve the re-rendering of component UI - use React Hooks
// useState()

function Counter() {

    let count = 5;

    // problem - variable value is change - State management
    let handleClick = () => {
       count = count + 1;
        console.log("count = ", count)
    }

    return (
        <>
            <button onClick={handleClick}> Increment </button>
            <p> Count = {count} </p>
        </>
    );

}

export default Counter