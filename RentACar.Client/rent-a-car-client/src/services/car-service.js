import axios from "axios";

const apiUrl = "https://localhost:5001/cars";

export async function getAllCars() {
  return await axios.get(apiUrl);
}

export async function getCarById(carId) {
  return await axios.get(`${apiUrl}/${carId}`);
}

async function editCar(car) {
  return await axios.put(apiUrl, car);
}

async function createCar(car) {
  return await axios.post(apiUrl, car);
}

export async function saveCar(car) {
  if (car.id) {
    return await editCar(car);
  } else {
    return await createCar(car);
  }
}

export async function deleteCar(userId) {
  return await axios.delete(`${apiUrl}/${userId}`);
}
