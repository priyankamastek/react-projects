import React, { useState, useEffect } from 'react'

const FetchDataAsync = () => {

    const [users, setUsers] = useState([])
    const [error, setError] = useState("")

    const URL = "https://jsonplaceholder.typicode.com/users"

    useEffect(() => {
      async function fetchData() {   
        try {

            const response = await fetch(URL);

            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const data  = await response.json();
            setUsers(data)

        }
        catch (error) {
            console.error(error.message);
        }
    }
    fetchData();
    }, [])

    // map method
    const usersList = users.map((user) =>
        <tr key={user.id}>
            <td> {user.name} </td>
            <td> {user.email} </td>
        </tr>
    )

    return (
        <div>
            <h1> ToDo Data List </h1>
            <table>
                <thead>
                    <tr>
                        <th>User Name</th>
                        <th>User Email</th>
                    </tr>
                </thead>
                <tbody>
                    {usersList}
                </tbody>
            </table>
        </div>
    )
}

export default FetchDataAsync
