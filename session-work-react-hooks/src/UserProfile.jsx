
function UserProfile({user : {name="Guest", age=30, location}}) {

    return (
        <>
            <ul>
                <li> { name }</li>
                <li> { age } </li>
                <li> { location } </li>
            </ul>
        </>

    );

}

export default UserProfile