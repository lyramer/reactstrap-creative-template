import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

class Contact extends Component {
  render() {
    return (
      <section className="page-section bg-dark text-white" id="contact">
        <Container>
          <Row className="justify-content-center">
            <Col lg="8" className="text-center">
              <h2 className="mt-0">Let's Get In Touch!</h2>
              <hr className="divider my-4" />
              <p className="text-muted mb-5">
                Ready to start your next project with us? Give us a call or send
                us an email and we will get back to you as soon as possible!
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg="4" className="ml-auto text-center mb-5 mb-lg-0">
              <i className="fas fa-phone fa-3x mb-3 text-muted"></i>
              <div>+1 (555) 123-4567</div>
            </Col>
            <Col lg="4" className="mr-auto text-center">
              <i className="fas fa-envelope fa-3x mb-3 text-muted"></i>
              {/* ><!-- Make sure to change the email address in BOTH the anchor text and the link target below!--><a className="d-block" href="mailto:contact@yourwebsite.com">contact@yourwebsite.com</a> */}
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default Contact;
