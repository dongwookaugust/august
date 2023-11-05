import React from 'react';
import Main from './pages/MainPage';
import Login from './pages/Login';
import Agree from './pages/Agree';
import Register from './pages/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";

function App() {
  let navigate = useNavigate();

  return(
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark" pt-5>
        <Container>
          <Navbar.Brand onClick={()=>{ navigate('/') }}>August</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link onClick={()=>{ navigate('/login') }}>Login</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/agree') }}>Join us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
      <Routes>
        <Route path="/" element={ <Main/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path="/agree" element={ <Agree/>}></Route>
        <Route path="/register" element={ <Register/>}></Route>
      </Routes>
    </div>
  )
}
  
export default App;