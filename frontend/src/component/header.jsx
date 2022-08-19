import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  let user = JSON.parse(localStorage.getItem("user-info"));
  let navigate = useNavigate();

  function Logout() {
    localStorage.clear();
    navigate("/login", { replace: true });
  }
  function Profile() {
    navigate("/profile", { replace: false });
  }
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Inventory</Navbar.Brand>
          <Nav className="me-auto navbar-wrapper">
            {localStorage.getItem("user-info") ? (
              <>
                {/* <Link to="/home">Home</Link>
                <Link to="/addproduct">Add Product</Link>
                <Link to="/updateproduct">Update Product</Link>}
                <Link to="/addcategory">Add Category</Link>
                <Link to="/updatecategory">Update Category</Link> */}
                <Link to="/productlist">Product List</Link>
                <Link to="/categorylist">Category List</Link>
                
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
                <NavDropdown.Item onClick={Profile}>Profile</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          ) : null}
        </Container>
      </Navbar>
    </div>
  );
}
export default Header;
