import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CarCard.scss";
import { useEffectOnce } from "../../UseEffectWorkaround";
import { getCurrentUser } from "../../../services/users-service";

export function CarCard({ car, onCarDelete }) {
  const navigate = useNavigate();
  const [user, setUser] = useState();

  useEffectOnce(() => {
    getCurrentUser()
      .then((response) => {
        console.log(response.data);
        setUser(response.data);
      })
      .catch((error) => console.log(error));
  });

  const navigateToEdit = () => {
    navigate(`/car/edit/${car.id}`);
  };

  const navigateToCarRental = () => {
    navigate(`/car/rent/${car.id}`);
  };

  return (
    <Card className="car-card" style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        className="card-img"
        src={car.pictureUrl}
        alt="Missing image"
      />
      <Card.Body>
        <Card.Title>
          {car.constructionYear} {car.brand} {car.model}
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Availble for rent: {car.count}
        </Card.Subtitle>
        <Card.Text>
          <strong>Fuel type: </strong>
          {car.fuelType}
        </Card.Text>
        <Card.Text>
          <strong>Vehicle type: </strong>
          {car.vehicleType}
        </Card.Text>
        <Card.Text>
          <strong>Seats: </strong>
          {car.numberOfSeats}
        </Card.Text>
        <Card.Text>
          <strong>Price per day: </strong>${car.pricePerDay}
        </Card.Text>
        <Button
          className="car-action-btn"
          variant="primary"
          onClick={navigateToCarRental}
          disabled={car.count <= 0}
        >
          Rent
        </Button>

        <Button
          className="car-action-btn"
          variant="warning"
          onClick={navigateToEdit}
          disabled={!user?.isAdmin}
        >
          Edit
        </Button>
        <Button
          className="car-action-btn"
          variant="danger"
          onClick={() => onCarDelete(car.id)}
          disabled={!user?.isAdmin}
        >
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
}
