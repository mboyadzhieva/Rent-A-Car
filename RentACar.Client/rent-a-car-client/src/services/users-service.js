import axios from "axios";

const apiUrl = "https://rent-a-car-backend-server.herokuapp.com/users";
//const apiUrl = "https://localhost:5001/users";

export async function getAllUsers() {
  const users = await axios.get(apiUrl);
  return users;
}

export async function getUserById(userId) {
  return await axios.get(`${apiUrl}/${userId}`);
}

export async function getCurrentUser() {
  return await axios.get(`${apiUrl}/currentUser`);
}

export async function updateUser(user) {
  return await axios.put(apiUrl, user);
}

export async function deleteUser(userId) {
  return await axios.delete(`${apiUrl}/${userId}`);
}
