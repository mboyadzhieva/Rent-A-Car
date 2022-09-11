import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./UserRow.scss";
import { useState } from "react";
import { useEffectOnce } from "../../UseEffectWorkaround";
import { getCurrentUser } from "../../../services/users-service";

export function UserRow({ user, onUserDelete }) {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState();

  useEffectOnce(() => {
    getCurrentUser()
      .then((response) => {
        setCurrentUser(response.data);
      })
      .catch((error) => console.log(error));
  });

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
        <Button
          className="user-actions btn-warning"
          onClick={redirectToEdit}
          disabled={!currentUser?.isAdmin}
        >
          Edit
        </Button>
        <Button
          className="user-actions btn-danger"
          onClick={() => onUserDelete(user.id)}
          disabled={!currentUser?.isAdmin}
        >
          Delete
        </Button>
      </td>
    </tr>
  );
}
