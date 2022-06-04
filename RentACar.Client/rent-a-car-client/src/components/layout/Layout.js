import { Header } from "./../header/Header";
import { Footer } from "./../footer/Footer";
import { Main } from "./../main/Main";
import { Container, Row } from "react-bootstrap";

export function Layout() {
  return (
    <Container fluid>
      <Row>
        <Header />
      </Row>
      <Row>
        <Main />
      </Row>
      <Row>
        <Footer />
      </Row>
    </Container>
  );
}
