import Nav from "react-bootstrap/Nav";
import { useNavigate } from "react-router-dom";
import "./UserRow.scss";

export function UserRow({ user, onUserDelete }) {
  const navigate = useNavigate();

  const redirectToEdit = () => {
    navigate(`/user/edit/${user.id}`);
  };

  return (
    <tr>
      <td>{user.fullName}</td>
      <td>{user.email}</td>
      <td>{user.userName}</td>
      <td>{user.phoneNumber}</td>
      <td>
        <img src={user.pictureUrl} alt="Profile avatar of current user." />
      </td>
      <td>
        <Nav.Link className="nav-link user-actions" onClick={redirectToEdit}>
          Edit
        </Nav.Link>
        <Nav.Link
          className="nav-link user-actions"
          onClick={() => onUserDelete(user.id)}
        >
          Delete
        </Nav.Link>
      </td>
    </tr>
  );
}
