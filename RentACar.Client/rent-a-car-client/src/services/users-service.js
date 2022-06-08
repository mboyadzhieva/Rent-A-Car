import axios from "axios";

const apiUrl = "https://rentacarserver.azurewebsites.net/users";

export async function getAllUsers() {
  const users = await axios.get(apiUrl);
  console.log(users);
  return users;
}

export async function getUserById(userId) {
  return await axios.get(`${apiUrl}/${userId}`);
}

export async function updateUser(user) {
  return await axios.put(apiUrl, user);
}

export async function deleteUser(userId) {
  return await axios.delete(`${apiUrl}/${userId}`);
}
