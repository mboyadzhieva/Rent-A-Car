import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { logout } from "./../../services/auth-service";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./Header.scss";

export function Header() {
  const navigate = useNavigate();

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
            <Link className="nav-link" to="/car/add">
              Add car
            </Link>
            <Link className="nav-link" to="/car-rentals">
              My rentals
            </Link>
          </Nav>
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
