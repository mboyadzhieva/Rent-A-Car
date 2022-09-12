import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { register } from "../../services/auth-service";
import "./Auth.scss";

export function Register() {
  const navigate = useNavigate();

  const [error, setError] = useState();

  const [user, setUser] = useState({
    fullName: "",
    username: "",
    email: "",
    phoneNumber: "",
    password: "",
  });

  const onInputChange = (event) => {
    setUser((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
    });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    register(user)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => setError(error.message));
  };

  const onLoginBtnClick = () => {
    navigate("/login");
  };

  return (
    <Form className="auth-form-wrapper shadow-lg p-3 mb-5 bg-white rounded">
      <h1 className="auth-form-title">Sign Up</h1>
      {error && <span className="text-danger">{error}</span>}
      <Form.Group className="mb-3">
        <Form.Label>Full Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter full name"
          name="fullName"
          value={user.fullName}
          onChange={onInputChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter username"
          name="username"
          value={user.username}
          onChange={onInputChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          name="email"
          value={user.email}
          onChange={onInputChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Phone number</Form.Label>
        <Form.Control
          type="tel"
          placeholder="Enter phone"
          name="phoneNumber"
          value={user.phoneNumber}
          onChange={onInputChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          name="password"
          value={user.password}
          onChange={onInputChange}
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit" onClick={onFormSubmit}>
        Register
      </Button>
      <Button className="btnLogin" variant="primary" onClick={onLoginBtnClick}>
        Sign In
      </Button>
    </Form>
  );
}
