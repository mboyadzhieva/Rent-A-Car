import axios from "axios";

const apiUrl = "https://rent-a-car-backend-server.herokuapp.com/carRental";

export async function rentACar(carRental) {
  return await axios.post(apiUrl, carRental);
}

export async function getAllCarRentals() {
  return await axios.get(apiUrl);
}
