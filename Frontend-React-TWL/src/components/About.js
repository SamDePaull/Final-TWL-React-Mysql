import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavBarComponent from './NavBarComponent';

const About = () => {
  return (
    <div>
      <NavBarComponent />
      <Container className="about-me">
        <h2 className="about-heading">About Me</h2>
        <Row>
          <Col md={4}>
            <Image
              className="profile-picture"
              src={`${process.env.PUBLIC_URL}/assets/user.png`}
              alt="Profile Picture"
              roundedCircle
              fluid
            />
          </Col>
          <Col md={8}>
            <p className="about-text">
              Hi there! I'm <em>Prima Willa Samudra</em>, a passionate student studying System Information at Ahmad
              Dahlan University. I have a strong interest in the field of technology and enjoy learning about various
              aspects of information systems.
            </p>
            <p className="about-text">
              During my time at university, I have gained knowledge in areas such as database management, software
              development, and data analysis. I have also had the opportunity to work on various projects that have
              enhanced my skills and allowed me to apply theoretical concepts in practical settings.
            </p>
            <p className="about-text">
              Apart from my academic pursuits, I am actively involved in extracurricular activities related to
              technology. I believe in continuous learning and strive to stay updated with the latest advancements in the
              field. I am passionate about leveraging technology to solve real-world problems and make a positive impact
              in society.
            </p>
            <p className="about-text">
              If you have any questions or would like to connect, feel free to reach out to me. I am open to
              opportunities and collaborations that allow me to further enhance my skills and contribute to the field of
              information systems.
            </p>
            <p>
              <Link to="/" className="custom-button">
                Go Back to Home
              </Link>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
