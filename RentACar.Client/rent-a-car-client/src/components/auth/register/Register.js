import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import "./../Auth.scss";

export function Register() {
  return (
    <Col className="bg">
      <Form className="form-wrapper shadow-lg p-3 mb-5 bg-white rounded">
        <h1 className="form-title">Sign Up</h1>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter username" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Phone number</Form.Label>
          <Form.Control type="tel" placeholder="Enter phone" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Col>
    // <div className="bg">
    //   <div className="form-wrapper shadow-lg p-3 mb-5 bg-white rounded">

    //   </div>
    // </div>
  );
}
