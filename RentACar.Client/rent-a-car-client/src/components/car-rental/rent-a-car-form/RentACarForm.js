import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./RentACar.scss";
import Col from "react-bootstrap/Col";
import { useParams, useNavigate } from "react-router-dom";
import { rentACar } from "../../../services/rent-a-car-service";
import { useState } from "react";
import { CarRentalDetails } from "../user-car-rentals/CarRentalsDetails";

export function RentACarForm() {
  const params = useParams();
  const navigate = useNavigate();

  const [carRental, setCarRental] = useState({
    carId: params.id,
    startDate: "",
    endDate: "",
  });

  const onRentACar = (event) => {
    event.preventDefault();

    rentACar(carRental).then((response) => {
      navigate(`/car-rentals/${response.data.userId}`);
    });
  };

  const onInputChange = (event) => {
    setCarRental((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <Col className="rent-a-car-form-wrapper">
      <Form className="rent-a-car-form">
        <Form.Group className="mb-3">
          <Form.Label>Start date</Form.Label>
          <Form.Control
            type="date"
            placeholder="Enter start date"
            name="startDate"
            value={carRental.startDate}
            onChange={onInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>End date</Form.Label>
          <Form.Control
            type="date"
            placeholder="Enter end date"
            name="endDate"
            value={carRental.endDate}
            onChange={onInputChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={onRentACar}>
          Rent
        </Button>
      </Form>
    </Col>
  );
}
