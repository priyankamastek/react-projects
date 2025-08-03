
function Click(){
 let count = 0;

    
const handleClick = () => console.log("Button Clicked..");
    
const handleClick2 = (name) => console.log(`${name}`);

const handleClick3 = () => {
  count = count + 1;
  console.log(`${count}`);
} 

const handleClick4 = (e) => {
  console.log(e)
 e.target.textContent =  e.target.textContent === "SHOW" ? "HIDE": "SHOW";
}

    return(
        <>
          <button onClick={handleClick}>Click Me </button>
          <button onClick={() => handleClick2("Bob")}>Click the button </button>
          <button onClick={handleClick3}>Click the button </button>
          <button onDoubleClick={(e) => handleClick4(e)}>SHOW </button>
         
        </>
    );
}


export default Click