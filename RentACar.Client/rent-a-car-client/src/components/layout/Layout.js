import { Container, Row } from "react-bootstrap";
import { Footer } from "./../footer/Footer";
import { Header } from "./../header/Header";
import { Main } from "./../main/Main";

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
