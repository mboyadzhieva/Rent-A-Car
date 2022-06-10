import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import { useParams, useNavigate } from "react-router-dom";
import { rentACar } from "../../services/rent-a-car-service";
import { useState } from "react";
import "./RentACarForm.scss";

export function RentACarForm() {
  const params = useParams();
  const navigate = useNavigate();

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
        setCarRentalResponseInfo(response.data);
        setShow(true);
      })
      .catch((error) => console.log(error));
  };

  const handleClose = () => {
    setShow(false);
    navigate("/cars");
  };

  const onInputChange = (event) => {
    setCarRentalRequestInfo((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <Col>
      <Form className="rent-a-car-form shadow-lg p-3 mb-5 bg-white rounded">
        <h3 className="rent-a-car-form-title">
          Choose start and end dates of yor rental:
        </h3>
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

        <Button variant="primary" onClick={onRentACar}>
          Rent
        </Button>
      </Form>

      <Modal show={show} onHide={handleClose}>
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
          <Button variant="primary" onClick={handleClose}>
            Back to cars
          </Button>
        </Modal.Footer>
      </Modal>
    </Col>
  );
}
