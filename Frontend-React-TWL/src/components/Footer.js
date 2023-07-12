import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-5">
      <Container>
        <Row>
          <Col className="text-center">
            <Link to="/About">
              About Me
            </Link>
            <p>&copy; Tekweb Lanjut . Prima Willa Samudra.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
