import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "./../../services/auth-service";
import { getCurrentUser } from "./../../services/users-service";
import "./Header.scss";

export function Header() {
  const navigate = useNavigate();
  const [user, setUser] = useState();

  useEffect(() => {
    getCurrentUser()
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => console.log(error));
  }, user);

  function test() {
    if (user) {
      return <Navbar.Text>Hello, {user.userName}!</Navbar.Text>;
    } else {
      return <div></div>;
    }
  }

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="header">
      <Container>
        <Navbar.Brand to="#home">Rent A Car</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to="/users">
              Users
            </Link>
            <Link className="nav-link" to="/cars">
              Cars
            </Link>
            <Link className="nav-link" to="/car-rentals">
              My rentals
            </Link>
          </Nav>
          {test()}
          <Button
            className="nav-link logout"
            onClick={() => {
              logout();
              navigate("/login");
            }}
          >
            Logout
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
