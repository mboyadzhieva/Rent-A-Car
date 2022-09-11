import Button from "react-bootstrap/Button";
import { useState } from "react";
import { deleteCar, getAllCars } from "../../../services/car-service";
import { getCurrentUser } from "../../../services/users-service";
import { useEffectOnce } from "../../UseEffectWorkaround";
import { CarCard } from "./../car-card/CarCard";
import "./CarList.scss";
import { useNavigate } from "react-router-dom";

export function CarList() {
  const navigate = useNavigate();

  const [cars, setCars] = useState([]);
  const [user, setUser] = useState();

  useEffectOnce(() => {
    getAllCars()
      .then((response) => {
        setCars(response.data);
      })
      .catch((error) => console.log(error));

    getCurrentUser()
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => console.log(error));
  });

  const onDeleteHandler = async (id) => {
    deleteCar(id).then(() => {
      getAllCars()
        .then((response) => {
          setCars(response.data);
        })
        .catch((error) => console.log(error));
    });
  };

  const onCarAddBtnClick = () => {
    navigate("/car/add");
  };

  return (
    <>
      <Button
        type="button"
        variant="secondary"
        className="add-car-btn"
        disabled={!user?.isAdmin}
        onClick={onCarAddBtnClick}
      >
        Add new car
      </Button>
      <section className="car-list-wrapper">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} onCarDelete={onDeleteHandler} />
        ))}
      </section>
    </>
  );
}
