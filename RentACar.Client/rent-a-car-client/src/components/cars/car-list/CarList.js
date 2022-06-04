import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { deleteCar, getAllCars } from "../../../services/car-service";
import { CarCard } from "./../car-card/CarCard";
import "./CarList.scss";

export function CarList() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    getAllCars()
      .then((response) => {
        setCars(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const onDeleteHandler = async (id) => {
    deleteCar(id).then(() => {
      getAllCars().then((response) => {
        setCars(response.data);
      });
    });
  };

  return (
    <>
      {/* <Button className="add-car-btn" variant="success" type="submit">
        Add car
      </Button> */}
      {cars.map((car) => (
        <CarCard key={car.id} car={car} onCarDelete={onDeleteHandler} />
      ))}
    </>
  );
}
