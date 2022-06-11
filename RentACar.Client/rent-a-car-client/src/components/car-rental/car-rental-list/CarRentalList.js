import { useEffect, useState } from "react";
import { getAllCarRentals } from "../../../services/rent-a-car-service";
import { CarRentalDetails } from "../car-rental-details/CarRentalDetails";
import Accordion from "react-bootstrap/Accordion";

export function CarRentalList() {
  const [carRentals, setCarRentals] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    getAllCarRentals()
      .then((response) => {
        setCarRentals(response.data);
      })
      .catch((error) => setError(error));
  }, []);

  return (
    <Accordion>
      {error && <span className="text-danger">{error}</span>}
      {carRentals.map((carRental) => (
        <CarRentalDetails key={carRental.Id} carRental={carRental} />
      ))}
    </Accordion>
  );
}
