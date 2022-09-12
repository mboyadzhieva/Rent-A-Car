import { useState } from "react";
import Table from "react-bootstrap/Table";
import { deleteUser, getAllUsers } from "../../../services/users-service";
import { useEffectOnce } from "../../UseEffectWorkaround";
import { UserRow } from "../user-row/UserRow";
import "./UsersTable.scss";

export function UsersTable() {
  const [users, setUsers] = useState([]);

  useEffectOnce(() => {
    getAllUsers()
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const deleteUserHandler = async (id) => {
    deleteUser(id).then(() => {
      getAllUsers()
        .then((response) => {
          setUsers(response.data);
        })
        .catch((error) => console.log(error));
    });
  };

  return (
    <Table striped bordered hover size="sm" className="user-info-wrapper">
      <thead>
        <tr>
          <th>Full Name</th>
          <th>Email</th>
          <th>Username</th>
          <th>Phone</th>
          <th>Picture</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <UserRow key={user.id} user={user} onUserDelete={deleteUserHandler} />
        ))}
      </tbody>
    </Table>
  );
}
