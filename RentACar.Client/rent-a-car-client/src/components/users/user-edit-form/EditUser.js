import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getUserById, updateUser } from "../../../services/users-service";
import "./EditUser.scss";

export function EditUser() {
  const navigate = useNavigate();
  const params = useParams();

  const [error, setError] = useState();

  const [user, setUser] = useState({
    fullName: "",
    userName: "",
    email: "",
    phoneNumber: "",
    pictureUrl: "",
  });

  useEffect(() => {
    if (params.id) {
      getUserById(params.id)
        .then((response) => {
          setUser(response.data);
        })
        .catch((error) => setError(error));
    }
  }, [params.id]);

  const onUserEdit = () => {
    updateUser(user).then(() => {
      navigate("/users");
    });
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
      <Form className="user-form-wrapper shadow-lg p-3 mb-5 bg-white rounded">
        <h1 className="user-form-title">Edit user info</h1>
        {error && <span className="text-danger">{error}</span>}
        <Form.Group className="mb-3">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter full name"
            name="fullName"
            value={user.fullName}
            onChange={onInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            name="userName"
            value={user.userName}
            onChange={onInputChange}
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
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Picture Url</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter picture url"
            name="pictureUrl"
            value={user.pictureUrl}
            onChange={onInputChange}
          />
        </Form.Group>

        <Button variant="primary" onClick={onUserEdit}>
          Save changes
        </Button>
      </Form>
    </Col>
  );
}
