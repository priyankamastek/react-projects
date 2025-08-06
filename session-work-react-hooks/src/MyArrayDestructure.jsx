

function MyArrayDestructure({items}){
   // destructuring inside the function
   // const [a, b, c] = items

  //  const itemsArr = props.items.map((x) => <li> {x} </li>)
    const itemsArr = items.map((x, index) => <li key={index}> {index}  - {x} </li>)
    return(
        <>
          <ul>
            {itemsArr}
          </ul>
        </>
    );
}

export default MyArrayDestructure