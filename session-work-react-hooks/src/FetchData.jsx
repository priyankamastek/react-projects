import React, { useState, useEffect } from 'react'

const FetchData = () => {

    const [users, setUsers] = useState([])
    const [error, setError] = useState("")

    useEffect(() => {
        // returning the Promise object
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())

            .then(data => {
             console.log(data)
                setUsers(data)
                                  
                })
           
                .catch(err => setError(err.message))
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

export default FetchData
