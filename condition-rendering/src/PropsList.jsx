import './PropsList.css'

function PropsList(props) {
    const categoryList = props.category;
    const itemList = props.items;

    const listItems = itemList.map(item =>
        <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.calories}</td>
        </tr>
    );

    return (<>
        <h3 className="list-category"> {categoryList}</h3>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Calories</th>
                </tr>
            </thead>
            <tbody>
                {listItems}
            </tbody>
        </table>
    </>
    );

}

export default PropsList;