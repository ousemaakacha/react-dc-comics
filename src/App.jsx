import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Container, Row, Col, Nav, Button } from "react-bootstrap";
import Header from "./components/Header";
import Main from "./components/Main";
// import DCLOGO from "./img/dc-logo.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />

      <Main />

      <footer class="bg-dark text-light py-5 position-relative">
        <Container>
          <Row>
            <Col md={3}>
              <h6>DC COMICS</h6>
              <ul class="list-unstyled small">
                <li>Characters</li>
                <li>Comics</li>
                <li>Movies</li>
                <li>TV</li>
                <li>Games</li>
                <li>Videos</li>
                <li>News</li>
              </ul>
              <h6 class="mt-3">SHOP</h6>
              <ul class="list-unstyled small">
                <li>Shop DC</li>
                <li>Shop DC Collectibles</li>
              </ul>
            </Col>

            <Col md={3}>
              <h6>DC</h6>
              <ul class="list-unstyled small">
                <li>Terms Of Use</li>
                <li>Privacy Policy (New)</li>
                <li>Ad Choices</li>
                <li>Advertising</li>
                <li>Jobs</li>
                <li>Subscriptions</li>
                <li>Talent Workshops</li>
                <li>CPSC Certificates</li>
                <li>Ratings</li>
                <li>Shop Help</li>
                <li>Contact Us</li>
              </ul>
            </Col>

            <Col md={3}>
              <h6>SITES</h6>
              <ul class="list-unstyled small">
                <li>DC</li>
                <li>MAD Magazine</li>
                <li>DC Kids</li>
                <li>DC Universe</li>
                <li>DC Power Visa</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default App;
