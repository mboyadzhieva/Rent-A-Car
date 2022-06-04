import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getCarById } from "../../../services/car-service";
import { CarCard } from "./../../cars/car-card/CarCard";
import { getAllCarRentalsOfUser } from "../../../services/rent-a-car-service";

export function CarRentalDetails() {
  const params = useParams();
  const [carRentals, setCarRentals] = useState([]);

  useEffect(() => {
    getAllCarRentalsOfUser(params.id).then((response) => {
      setCarRentals(response.data);
    });
  }, []);

  return (
    <>
      {carRentals.map((carRental) => (
        <CarCard
          key={carRental.carId}
          car={getCarById(carRental.carId)}
          isInCarRentalDetails={true}
        />
      ))}
      {/* {carRentals.forEach((carRental) => {
        getCarById(carRental.carId).then((response) => {
          console.log(response.data);
          <CarCard
            key={response.data.id}
            car={response.data}
            isInCarRentalDetails={true}
          />;
        });
      })} */}
      {/* {carRentals.map((carRental) => {
        getCarById(carRental.carId).then((response) => {
          setCars(response.data);
          console.log(response.data);
        });

        return (
          <>
            <CarCard key={car.id} car={car} isInCarRentalDetails={true} />
          </>
        );
      })} */}
    </>
  );
}
