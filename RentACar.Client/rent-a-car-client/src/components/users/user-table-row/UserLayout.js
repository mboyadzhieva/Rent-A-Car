import "./UserLayout.scss";
import Nav from "react-bootstrap/Nav";
import { useNavigate } from "react-router-dom";

export function UserLayout({ user, onUserDelete }) {
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
        {/* <Button variant="danger" type="submit" onClick={onUserDelete}>
          Delete
        </Button> */}
      </td>
    </tr>
    // <section className="user-info-wrapper">
    //   <h2>{user.fullName}</h2>
    //   <img
    //     className="profile-photo"
    //     src={user.pictureUrl}
    //     alt="Profile picture."
    //   />
    //   <ul>
    //     <li>{user.username}</li>
    //     <li>{user.email}</li>
    //     <li>{user.phoneNumber}</li>
    //   </ul>
    // </section>
  );
}
