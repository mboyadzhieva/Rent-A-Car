import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
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
        <Button className="user-actions btn-warning" onClick={redirectToEdit}>
          Edit
        </Button>
        <Button
          className="user-actions btn-danger"
          onClick={() => onUserDelete(user.id)}
        >
          Delete
        </Button>
      </td>
    </tr>
  );
}
