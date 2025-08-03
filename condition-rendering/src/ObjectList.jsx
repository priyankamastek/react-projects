function ObjectList() {
    const fruits = [
        { id: 1, name: "apple", calories: 95 },
        { id: 2, name: "orange", calories: 45 },
        { id: 3, name: "banana", calories: 105 },
        { id: 4, name: "coconut", calories: 159 },
        { id: 5, name: "pineapple", calories: 59 }
    ];

    // alphabetical sorting on name
    // fruits.sort((a, b) => a.name.localeCompare(b.name));

    // Sorting based on calories
    //   fruits.sort((a, b) => a.calories - b.calories)

    // To filter the array
    //const lowerCalories = fruits.filter(fruit => fruit.calories < 100);

    const itemList = fruits.map
        (fruit => <li key={fruit.id}>
            {fruit.name}  -
            <b> {fruit.calories} </b>
        </li>)

    return (
        <ol>
            {itemList}
        </ol>
    );

}

export default ObjectList;