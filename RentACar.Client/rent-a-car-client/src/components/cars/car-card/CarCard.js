import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./CarCard.scss";
import { useNavigate } from "react-router-dom";

export function CarCard({ car, onCarDelete, isInCarRentalDetails }) {
  const navigate = useNavigate();

  const navigateToEdit = () => {
    navigate(`/car/edit/${car.id}`);
  };

  const navigateToCarRental = () => {
    navigate(`/car/rent/${car.id}`);
  };

  return (
    <Card className="car-card" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={car.pictureUrl} />
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
        {!isInCarRentalDetails ? (
          <Button
            className="car-action-btn"
            variant="primary"
            onClick={navigateToCarRental}
          >
            Rent
          </Button>
        ) : (
          ""
        )}

        {!isInCarRentalDetails ? (
          <Button
            className="car-action-btn"
            variant="warning"
            onClick={navigateToEdit}
          >
            Edit
          </Button>
        ) : (
          ""
        )}

        {!isInCarRentalDetails ? (
          <Button
            className="car-action-btn"
            variant="danger"
            onClick={() => onCarDelete(car.id)}
          >
            Delete
          </Button>
        ) : (
          ""
        )}
      </Card.Body>
    </Card>
  );
}
