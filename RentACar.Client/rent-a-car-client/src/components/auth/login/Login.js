import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import "./../Auth.scss";
import { login } from "./../../services/auth-service";
import { useEffect, useState } from "react";

export function Login() {
  const [user, setUser] = useState();

  const onFormSubmit = (event) => {
    event.preventDefault();

    login();
  };

  useEffect(() => {}, []);

  return (
    <Col className="bg">
      <Form className="form-wrapper shadow-lg p-3 mb-5 bg-white rounded">
        <h1 className="form-title">Login</h1>

        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={onFormSubmit}>
          Submit
        </Button>
      </Form>
    </Col>
  );
}
