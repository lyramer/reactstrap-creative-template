import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";

class Header extends Component {
  render() {
    return (
      <header class="masthead">
        <Container className="h-100">
          <Row className="h-100 align-items-center justify-content-center text-center">
            <Col lg="10" className="align-self-end">
              <h1 className="text-uppercase text-white font-weight-bold">
                Your Favorite Source of Free Bootstrap Themes
              </h1>
              <hr className="divider my-4" />
            </Col>
            <Col lg="8" className="align-self-baseline">
              <p className="text-white-75 font-weight-light mb-5">
                Start Bootstrap can help you build better websites using the
                Bootstrap framework! Just download a theme and start
                customizing, no strings attached!
              </p>
              <Button color="primary" size="xl" href="#about">
                Find Out More
              </Button>
            </Col>
          </Row>
        </Container>
      </header>
    );
  }
}

export default Header;
