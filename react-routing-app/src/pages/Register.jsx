import React from 'react'

import { useNavigate } from 'react-router-dom'

const Register = () => {

  let navigate = useNavigate()

  return (
    <div>
       <h1> Register</h1>
       <button onClick={() => {navigate('/')}}>Back to Home Page</button>
       
    </div>
  )
}

export default Register
