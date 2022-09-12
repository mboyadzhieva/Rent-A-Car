import axios from "axios";

const apiUrl = "https://rent-a-car-backend-server.herokuapp.com/identity";
// const apiUrl = "https://localhost:5001/identity";

export async function login(user) {
  return await axios.post(`${apiUrl}/login`, user).then((response) => {
    saveToken(response.data["token"]);
  });
}

export async function register(user) {
  user.pictureUrl = `https://picsum.photos/150/150?random=${Math.random()}`;

  return await axios.post(`${apiUrl}/register`, user);
}

function saveToken(token) {
  localStorage.setItem("token", token);
}

export function getToken() {
  return localStorage.getItem("token");
}

export function isUserLogged() {
  if (getToken()) {
    return true;
  } else {
    return false;
  }
}

export function logout() {
  localStorage.removeItem("token");
}
