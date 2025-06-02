import React, { Component } from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";

export default class WorkProcess extends Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <Row className="justify-content-center">
            <Col xs={12}>
              <div className="section-title text-center mb-4 pb-2">
                <h6 className="text-primary">Work Process</h6>
                <h4 className="title mb-4">How do we work?</h4>
                <p className="text-muted para-desc mx-auto mb-0">
                  Start working with{" "}
                  <span className="text-primary font-weight-bold">
                    Spotless Apps
                  </span>
                  . We follow a strict Agile software devlopment with SCRUM
                  integerated in our process to provide the best possible
                  product to our client in the least time.
                </p>
              </div>
            </Col>
          </Row>

          <Row>
            <Col md={4} className="mt-4 pt-2">
              <Card className="features feature-clean work-process bg-transparent process-arrow border-0 text-center">
                <div className="icons text-primary text-center mx-auto">
                  <i className="uil uil-presentation-edit d-block rounded h3 mb-0"></i>
                </div>

                <CardBody>
                  <h5 className="text-dark">Design</h5>
                  <p className="text-muted mb-0">
                    Our UI/UX designers gather requirments and work closely with
                    clients to create just what they need in Figma/Adobe
                    XD/Sketch.
                  </p>
                </CardBody>
              </Card>
            </Col>

            <Col md={4} className="mt-md-5 pt-md-3 mt-4 pt-2">
              <Card className="card features feature-clean work-process bg-transparent process-arrow border-0 text-center">
                <div className="icons text-primary text-center mx-auto">
                  <i className="uil uil-arrow d-block rounded h3 mb-0"></i>
                </div>

                <CardBody>
                  <h5 className="text-dark">Development</h5>
                  <p className="text-muted mb-0">
                    Our expirenced developers develop the designs into working
                    products using state-of-the-art tech stacks.
                  </p>
                </CardBody>
              </Card>
            </Col>

            <Col md={4} className="mt-md-5 pt-md-5 mt-4 pt-2">
              <Card className="features feature-clean work-process bg-transparent d-none-arrow border-0 text-center">
                <div className="icons text-primary text-center mx-auto">
                  <i className="uil uil-check-square d-block rounded h3 mb-0"></i>
                </div>

                <CardBody>
                  <h5 className="text-dark">QA and testing</h5>
                  <p className="text-muted mb-0">
                    Our Quality Assurance team make the product go through
                    rigorous testing and find each and every hidden bug to solve
                    it.
                  </p>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
