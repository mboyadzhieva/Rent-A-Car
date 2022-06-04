import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import "./../Auth.scss";
import { login, saveToken } from "./../../../services/auth-service";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Login() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();

    login(user)
      .then(() => {
        navigate("/users");
      })
      .catch((error) => setError(error.message));
  };

  const onInputChange = (event) => {
    setUser((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
    });
  };

  return (
    <Col className="bg">
      <Form className="form-wrapper shadow-lg p-3 mb-5 bg-white rounded">
        <h1 className="form-title">Login</h1>
        {error && <span className="text-danger">{error}</span>}
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={user.email}
            onChange={onInputChange}
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
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={onFormSubmit}>
          Submit
        </Button>
      </Form>
    </Col>
  );
}
