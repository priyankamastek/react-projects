// Rendering simple array 
function List() {
    const fruits = ["apple", "orange", "banana", "coconut", "pineapple"];
    // array.sort()
    fruits.sort();
    // array.map(() => {})
    const listItems = fruits.map(x => <li>{x}</li>);

    return (
        <ol>
            {listItems}
        </ol>
    );

}


export default List;