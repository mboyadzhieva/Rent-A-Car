import { useState, useEffect } from "react";
import { deleteUser, getAllUsers } from "../../../services/users-service";
import { UserLayout } from "../user-table-row/UserLayout";
import "./UsersList.scss";
import Table from "react-bootstrap/Table";

export function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers()
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const deleteUserHandler = async (id) => {
    deleteUser(id).then(() => {
      getAllUsers().then((response) => {
        setUsers(response.data);
      });
    });
  };

  return (
    <Table striped bordered hover size="sm">
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
          <UserLayout
            key={user.id}
            user={user}
            onUserDelete={deleteUserHandler}
          />
        ))}
      </tbody>
    </Table>
    // <div>

    // </div>
  );
}
