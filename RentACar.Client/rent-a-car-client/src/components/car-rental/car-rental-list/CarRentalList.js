import { useEffect, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import { getAllCarRentals } from "../../../services/rent-a-car-service";
import { CarRentalDetails } from "../car-rental-details/CarRentalDetails";
import "./CarRentalsList.scss";

export function CarRentalList() {
  const [carRentals, setCarRentals] = useState([]);

  useEffect(() => {
    getAllCarRentals()
      .then((response) => {
        setCarRentals(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Accordion className="my-rentals-wrapper">
      <h3 className="my-rentals-title">My rentals:</h3>
      {carRentals.map((carRental) => (
        <CarRentalDetails key={carRental.id} carRental={carRental} />
      ))}
    </Accordion>
  );
}
