import { useState } from "react";
import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate, useParams } from "react-router-dom";
import { useEffectOnce } from "../../UseEffectWorkaround";
import { getCarById, saveCar } from "./../../../services/car-service";
import "./CarForm.scss";

export function CarForm() {
  const navigate = useNavigate();
  const params = useParams();

  const [error, setError] = useState();

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

  useEffectOnce(() => {
    if (params.id) {
      getCarById(params.id)
        .then((response) => {
          setCar(response.data);
        })
        .catch((error) => setError(error.message));
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
    <Col className="bg">
      <Form
        className="car-form-wrapper shadow-lg p-3 mb-5 bg-white rounded"
        onSubmit={onCarSubmit}
      >
        <h1 className="car-form-title">
          {car.id ? "Edit Car Info" : "Create Car"}
        </h1>
        {error && <span className="text-danger">{error}</span>}
        <Form.Group className="mb-3">
          <Form.Label>Brand</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter brand"
            name="brand"
            value={car.brand}
            onChange={onInputChange}
            required
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
            required
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
            required
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
            required
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
            placeholder="Enter price per fay"
            name="pricePerDay"
            value={car.pricePerDay}
            onChange={onInputChange}
            required
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
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          {car.id ? "Save changes" : "Create Car"}
        </Button>
      </Form>
    </Col>
  );
}
