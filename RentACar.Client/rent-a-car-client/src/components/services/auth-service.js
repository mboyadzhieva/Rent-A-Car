import axios from "axios";

const apiUrl = "https://localhost:44350/identity";

export function login(userEmail, userPass) {
  return axios.get(`${apiUrl}/login?email=${userEmail}&password=${userPass}`);
}
