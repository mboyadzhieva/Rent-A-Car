import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getCarById, saveCar } from "./../../../services/car-service";
import { Col } from "react-bootstrap";
import "./CarForm.scss";

export function CarForm() {
  const navigate = useNavigate();
  const params = useParams();

  const [car, setCar] = useState({
    brand: "",
    model: "",
    constructionYear: "",
    vehicleType: "",
    fuelType: "",
    numberOfSeats: "",
    pictureUrl: "",
    pricePerDay: "",
    count: "",
  });

  useEffect(() => {
    if (params.id) {
      getCarById(params.id)
        .then((response) => {
          setCar(response.data);
        })
        .catch((error) => console.log(error));
    }
  }, [params.id]);

  const onInputChange = (event) => {
    setCar((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const onCarSubmit = (event) => {
    event.preventDefault();

    saveCar(car).then(() => {
      navigate("/cars");
    });
  };

  return (
    <Col className="car-form-wrapper">
      <Form className="car-form" onSubmit={onCarSubmit}>
        <h1 className="form-title">
          {car.id ? "Edit Car Info" : "Create Car"}
        </h1>
        <Form.Group className="mb-3">
          <Form.Label>Brand</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter brand"
            name="brand"
            value={car.brand}
            onChange={onInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Model</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter model"
            name="model"
            value={car.model}
            onChange={onInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Construction year</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter construction year"
            name="constructionYear"
            value={car.constructionYear}
            onChange={onInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Vehicle type</Form.Label>
          <Form.Select
            name="vehicleType"
            value={car.vehicleType}
            onChange={onInputChange}
          >
            <option value="Economy">Economy</option>
            <option value="Estate">Estate</option>
            <option value="Luxury">Luxury</option>
            <option value="SUV">SUV</option>
            <option value="Cargo">Cargo</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Fuel type</Form.Label>
          <Form.Select
            name="fuelType"
            value={car.fuelType}
            onChange={onInputChange}
          >
            <option value="Petrol">Petrol</option>
            <option value="Diesel">Diesel</option>
            <option value="Hybrid">Hybrid</option>
            <option value="Electric">Electric</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Number of seats</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter number of seats"
            name="numberOfSeats"
            value={car.numberOfSeats}
            onChange={onInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Picture url</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter picture url"
            name="pictureUrl"
            value={car.pictureUrl}
            onChange={onInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter price"
            name="pricePerDay"
            value={car.pricePerDay}
            onChange={onInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Count</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter available number of vehicles"
            name="count"
            value={car.count}
            onChange={onInputChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          {car.id ? "Save changes" : "Create Car"}
        </Button>
      </Form>
    </Col>
  );
}
