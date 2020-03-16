import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

class Services extends Component {
  render() {
    return (
      <section className="page-section" id="services">
        <Container>
          <h2 className="text-center mt-0">At Your Service</h2>
          <hr className="divider my-4" />
          <Row>
            <Col lg="3" md="6" className="text-center">
              <div className="mt-5">
                <i className="fas fa-4x fa-gem text-primary mb-4"></i>
                <h3 className="h4 mb-2">Sturdy Themes</h3>
                <p className="text-muted mb-0">
                  Our themes are updated regularly to keep them bug free!
                </p>
              </div>
            </Col>
            <Col lg="3" md="6" className="text-center">
              <div className="mt-5">
                <i className="fas fa-4x fa-laptop-code text-primary mb-4"></i>
                <h3 className="h4 mb-2">Up to Date</h3>
                <p className="text-muted mb-0">
                  All dependencies are kept current to keep things fresh.
                </p>
              </div>
            </Col>
            <Col lg="3" md="6" className="text-center">
              <div className="mt-5">
                <i className="fas fa-4x fa-globe text-primary mb-4"></i>
                <h3 className="h4 mb-2">Ready to Publish</h3>
                <p className="text-muted mb-0">
                  You can use this design as is, or you can make changes!
                </p>
              </div>
            </Col>
            <Col lg="3" md="6" className="text-center">
              <div className="mt-5">
                <i className="fas fa-4x fa-heart text-primary mb-4"></i>
                <h3 className="h4 mb-2">Made with Love</h3>
                <p className="text-muted mb-0">
                  Is it really open source if it's not made with love?
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default Services;
