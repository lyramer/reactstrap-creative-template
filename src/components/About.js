import React from "react";
import { Container, Row, Col, Button } from "reactstrap";

const About = () => {
  return (
    <section className="page-section bg-primary" id="about">
      <Container>
        <Row className="justify-content-center">
          <Col lg="8" className="text-center">
            <h2 class="text-white mt-0">We've got what you need!</h2>
            <hr class="divider light my-4" />
            <p class="text-white-50 mb-4">
              Start Bootstrap has everything you need to get your new website up
              and running in no time! Choose one of our open source, free to
              download, and easy to use themes! No strings attached!
            </p>
            <Button color="light" size="xl" href="#services">
              Get Started!
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
