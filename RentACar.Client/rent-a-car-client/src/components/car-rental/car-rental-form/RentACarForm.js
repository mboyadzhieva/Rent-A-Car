import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useNavigate, useParams } from "react-router-dom";
import { rentACar } from "../../../services/rent-a-car-service";
import "./RentACarForm.scss";

export function RentACarForm() {
  const params = useParams();
  const navigate = useNavigate();

  const [error, setError] = useState();
  const [show, setShow] = useState(false);

  const [carRentalRequestInfo, setCarRentalRequestInfo] = useState({
    carId: params.id,
    startDate: "",
    endDate: "",
  });

  const [carRentalResponseInfo, setCarRentalResponseInfo] = useState({
    constructionYear: "",
    brand: "",
    model: "",
    days: "",
    totalPrice: "",
  });

  const onRentACar = (event) => {
    event.preventDefault();

    rentACar(carRentalRequestInfo)
      .then((response) => {
        if (!response.data) {
          setError("Both dates have to be future dates!");
          return;
        }
        setCarRentalResponseInfo(response.data);
        setShow(true);
      })
      .catch((error) => setError(error.message));
  };

  const handleBackToCars = () => {
    setShow(false);
    navigate("/cars");
  };

  const handleBackToRentals = () => {
    setShow(false);
    navigate("/car-rentals");
  };

  const onInputChange = (event) => {
    setCarRentalRequestInfo((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <>
      <Form className="rent-a-car-form shadow-lg p-3 mb-5 bg-white rounded">
        <h3 className="rent-a-car-form-title">
          Choose start and end dates of your rental:
        </h3>
        {error && <span className="text-danger">{error}</span>}
        <Form.Group className="mb-3">
          <Form.Label>Start date</Form.Label>
          <Form.Control
            type="date"
            placeholder="Enter start date"
            name="startDate"
            value={carRentalRequestInfo.startDate}
            onChange={onInputChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>End date</Form.Label>
          <Form.Control
            type="date"
            placeholder="Enter end date"
            name="endDate"
            value={carRentalRequestInfo.endDate}
            onChange={onInputChange}
            required
          />
        </Form.Group>

        <Button
          variant="primary"
          onClick={onRentACar}
          disabled={
            carRentalRequestInfo.startDate === "" ||
            carRentalRequestInfo.endDate === "" ||
            carRentalRequestInfo.startDate >= carRentalRequestInfo.endDate
              ? true
              : false
          }
        >
          Rent
        </Button>
      </Form>

      <Modal show={show} onHide={handleBackToCars}>
        <Modal.Header closeButton>
          <Modal.Title>Rental Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          You've just rented{" "}
          <strong>
            {carRentalResponseInfo.constructionYear}{" "}
            {carRentalResponseInfo.brand} {carRentalResponseInfo.model}{" "}
          </strong>{" "}
          for total of <strong> {carRentalResponseInfo.days} days </strong> for
          the price of <strong>${carRentalResponseInfo.totalPrice}</strong>!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleBackToCars}>
            Back to cars
          </Button>
          <Button variant="primary" onClick={handleBackToRentals}>
            Back to rentals
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
