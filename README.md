# react-projects





React Router DOM:  helps to handle routing in case of single page applications.



Major components in the react router dom are:

1. Browser Router

2\. Routes

3\. Route

4\. Link





Practical:



Create a new application named react-router-app:  



1. npm create vite@latest

2\.  cd react-router-app

3\.  npm install

4\.  npm install react-router-dom

5\. npm run dev





Open another cmd with the project recat-router-app

> code .


In the Visual Studio code, you can add this extension: **ES7 React/Redux/React‑Native snippets** extension



Then create 3 pages 



1. Home 
2. Orders
3. Register



Steps:



1. Under src , create folder "pages"



2\. under pages folder, create 3 .jsx files



1. Home.jsx 
2. Orders.jsx
3. Register.jsx 



To add function component in each file:

==============================================================

1. To write function in the files, open Home.jsx  and type : rafc 

2\. press enter key.

3\. It will generate the template of function components like this:



import React from 'react'



const Home = () => {

&nbsp; return (

&nbsp;   <div>

&nbsp;     

&nbsp;   </div>

&nbsp; )

}



export default Home





add under <div> tag



 <h1> Home </h1>







4\. Similarly add function component to other 2 .jsx files.

5\. Add <h1> Orders </h1> in Orders.jsx

6\. Add <h1> Register </h1> in Register.jsx

7\. Delete content from index.css and App.css file







Adding Routes to App.jsx file

===============================================================

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import Home from './pages/Home';

import Orders from './pages/Orders';

import Register from './pages/Register';



function App() {



&nbsp; return (

&nbsp;   <>

&nbsp;    <BrowserRouter>

&nbsp;      <Routes>



&nbsp;            <Route path="/" element={<Home />}></Route>

&nbsp;            <Route path="/orders" element={<Orders/>}></Route>

&nbsp;           <Route path="/register" element={<Register/>}></Route>



&nbsp;     </Routes>



</BrowserRouter>

&nbsp;   </>



&nbsp; );





}



export default App



Test the application in browser

http://localhost:5173

http://localhost:5173/orders

http://localhost:5173/register











Now, adding links to the routes for easy navigation

===================================================



update App.js with the code

function App() {



&nbsp; return (

&nbsp;   <>

&nbsp;     <BrowserRouter>

&nbsp;       <h1> React Routing</h1>





&nbsp;       **<div>**

          **<Link to="/">Home</Link> \&nbsp;**

          **<Link to="/orders"> Orders </Link> \&nbsp;**

          **<Link to="/register">Register</Link>**

        **</div>**

        **<br />**



&nbsp;       <Routes>



&nbsp;         <Route path="/" element={<Home />}></Route>

&nbsp;         <Route path="/orders" element={<Orders />}></Route>

&nbsp;         <Route path="/register" element={<Register />}></Route>

&nbsp;       </Routes>



&nbsp;     </BrowserRouter>

&nbsp;   </>



&nbsp; );





}



export default App

&nbsp;





Programmatic Navigation

==================================

1. Go to Register.jsx page



2\. Add the following code:



import React from 'react'



**import { useNavigate } from 'react-router-dom'**



const Register = () => {



&nbsp; **let navigate = useNavigate()**



&nbsp; return (

&nbsp;   <div>

&nbsp;      <h1> Register</h1>



&nbsp;      **<button onClick={() => {navigate('/')}}>Back to Home Page</button>**

&nbsp;      

&nbsp;   </div>

&nbsp; )

}



export default Register

















