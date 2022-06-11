import axios from "axios";

const apiUrl = "https://rentacarserver.azurewebsites.net/carRental";

export async function rentACar(carRental) {
  return await axios.post(apiUrl, carRental);
}

export async function getAllCarRentals() {
  return await axios.get(apiUrl);
}
