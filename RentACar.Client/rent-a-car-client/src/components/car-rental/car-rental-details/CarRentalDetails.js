import Accordion from "react-bootstrap/Accordion";

export function CarRentalDetails({ carRental }) {
  const formatDate = (date) => {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [day, month, year].join(".");
  };
  return (
    <Accordion.Item eventKey={carRental.key}>
      <Accordion.Header>
        {carRental.constructionYear} {carRental.brand} {carRental.model}
      </Accordion.Header>
      <Accordion.Body>
        Rented for {carRental.days} days for total of ${carRental.totalPrice}{" "}
        {""}
        from {formatDate(carRental.startDate)} to
        {formatDate(carRental.endDate)}.
      </Accordion.Body>
    </Accordion.Item>
  );
}
