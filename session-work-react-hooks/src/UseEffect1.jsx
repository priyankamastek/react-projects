import React, { useState, useEffect } from 'react'

// After component is mounted on the page
function UseEffect1() {

    const [count, setCount] = useState(0)
    const [name, setName] = useState("");

    let handleNameClick = () => setName("bob");

    let handleClick = () => setCount((c) => c + 1)

    // clientX, clientY
    let handleWindowEvent = (event) =>  {
      console.log ("X = " + event.clientX + " Y = " + event.clientY)   
    }        
    

    /*useEffect(() => {
        console.log("UseEffect invoked...")
        // update the window title - javascript 
        document.title = "Title " + count;
    }, [count])
   */


329
     useEffect(() => {
         console.log("UseEffect invoked..")
         window.addEventListener('mouseover', handleWindowEvent)

         // cleanup task - de-register the event handler on component unmount 
         return () => {
            window.removeEventListener('mouseover', handleWindowEvent)
            console.log("Component Unmounted..")
         }
     },[])

    

    return (
        <div>
            <h1> useEffect Component Mounted </h1>
            <h2> Count = {count} </h2>
            <h2> Name = {name} </h2>
            <button onClick={handleClick}> Count</button>
            <button onClick={handleNameClick}> Update Name</button>

        </div>
    )
}

export default UseEffect1


