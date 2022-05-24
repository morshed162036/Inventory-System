import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  let user = JSON.parse(localStorage.getItem("user-info"));
  let navigate = useNavigate();
  
  function Logout() {
    localStorage.clear();
    navigate("/register", { replace: true });
  }
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">E-comm</Navbar.Brand>
          <Nav className="me-auto navbar-wrapper">
            {localStorage.getItem("user-info") ? (
              <>
                <Link to="/home">Home</Link>
                <Link to="/add">Add Product</Link>
                <Link to="/update">Update Product</Link>
              </>
            ) : (
              <>
                <Link to="/home">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
              </>
            )}
          </Nav>
          {localStorage.getItem("user-info") ? (
            <Nav>
              name
              <NavDropdown title={user.name}>
                <NavDropdown.Item onClick={Logout}>Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          ) : null}
        </Container>
      </Navbar>
    </div>
  );
}
export default Header;
