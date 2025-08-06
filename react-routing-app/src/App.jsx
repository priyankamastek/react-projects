
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom'
import Home from './pages/Home';
import Orders from './pages/Orders';
import Register from './pages/Register';

function App() {

  return (
    <>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/orders"> Orders </NavLink>
            </li>
            <li>
              <NavLink to="/register"> Register</NavLink>
            </li>
            
          </ul>
        </nav>
        <br />

        <Routes>

          <Route path="/" element={<Home />}></Route>
          <Route path="/orders" element={<Orders />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="*" element={<h1> Page Not Found - 404 </h1>}></Route>
        </Routes>

      </BrowserRouter>
    </>

  );


}

export default App
