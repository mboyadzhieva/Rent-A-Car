import axios from "axios";

const apiUrl = "https://localhost:5001/carRental";

export async function rentACar(carRental) {
  return await axios.post(apiUrl, carRental);
}

export async function getAllCarRentalsOfUser(userId) {
  return await axios.get(`${apiUrl}/${userId}`);
}
