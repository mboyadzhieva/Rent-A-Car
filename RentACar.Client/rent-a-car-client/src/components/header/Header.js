import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

import "./Header.scss";
import { getToken, isUserLogged, logout } from "./../../services/auth-service";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

export function Header() {
  const navigate = useNavigate();
  const [isAuthenticated, setAuthenticated] = useState();

  useEffect(() => {
    setInterval(() => {
      if (isUserLogged()) {
        setAuthenticated(true);
      }
    }, []);
  }, 5000);

  const showAppropriateLinks = () => {
    if (isUserLogged()) {
      return (
        <>
          <Button
            className="nav-link logout"
            onClick={() => {
              logout();
              navigate("/login");
            }}
          >
            Logout
          </Button>
        </>
      );
    } else {
      return (
        <>
          <a className="nav-link" href="/login">
            Login
          </a>
          <a className="nav-link" href="/register">
            Register
          </a>
        </>
      );
    }
  };

  return (
    <Navbar bg="dark" variant="dark" className="header">
      <Container>
        <Navbar.Brand href="#home">Rent A Car</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/users">Users</Nav.Link>
          <Nav.Link href="/cars">Cars</Nav.Link>
          <Nav.Link href="/car/add">Add Car</Nav.Link>
        </Nav>
        {showAppropriateLinks()}
      </Container>
    </Navbar>
  );
}
