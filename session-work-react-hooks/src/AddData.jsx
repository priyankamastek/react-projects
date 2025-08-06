import React, {useState, useEffect } from 'react'

const AddData = () => {

const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [response, setResponse] = useState(null);
 
  const handleSubmit = (e) => {
    e.preventDefault(); // this will prevent to submit form to itself, cancel the post event
 
    const user = {
      name: name,
      email: email,
    };
 
    // fetch("url", {method, headers, body})
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)

    })
      .then((res) => res.json())

      .then((data) => {
        setResponse(data);
        console.log("User created:", data);
      })

      .catch((err) => {
        console.error("Error creating user:", err);
      });
  };



    return (
        <div style={{ padding: "20px" }}>
            <h2>Create New User</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <br /><br />
                <input
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <br /><br />
                <button type="submit">Submit</button>
            </form>

            {response && (
                <div style={{ marginTop: "20px" }}>
                    <h4>Response:</h4>
                    <pre>{JSON.stringify(response)}</pre>
                </div>
            )}
        </div>     
   )

}

export default AddData
