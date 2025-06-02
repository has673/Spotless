import Image from "next/image";
import Link from "next/link";
import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";

class Frontend extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="section  bg-light">
          <Container>
            <Row className="align-items-center">
              <Col
                lg={5}
                md={{ size: 5, order: 2 }}
                xs={{ size: 12, order: 1 }}
              >
                <Image
                  src="/assets/newimages/frontend.png"
                  className="img-fluid mx-auto d-block"
                  alt="Frontend"
                  width="350px"
                  height="335px"
                  style={{ maxWidth: "350px" }}
                />
              </Col>

              <Col
                lg={7}
                md={{ size: 7, order: 1 }}
                xs={{ size: 12, order: 2 }}
                className="mt-4 mt-sm-0 pt-2 pt-sm-0"
              >
                <div className="section-title">
                  <h4 className="title mb-4 font-weight-bold">
                    Frontend Development
                  </h4>
                  <p className="text-muted para-desc mb-0">
                    Frontend development sits at the intersection of 3 pillars:
                    clean code, beautiful design and intuitive usability.{" "}
                    <span className="text-primary font-weight-bold">
                      Spotless Apps
                    </span>{" "}
                    guarantee all three.
                  </p>
                  <div className="my-4 d-flex">
                    <Image
                      src="/assets/newimages/react-icon.png"
                      width="55px"
                      height="40px"
                      layout="intrinsic"
                    />
                    <a
                      href="#"
                      className="mt-1 mr-4"
                      style={{
                        color: "#000",
                        fontWeight: 600,
                        marginRight: "10px",
                      }}
                    >
                      React Development
                    </a>
                    <Image
                      src="/assets/newimages/angular-icon.png"
                      width="34px"
                      height="35px"
                      layout="intrinsic"
                    />
                    <a
                      href="#"
                      className="ml-1 mt-1"
                      style={{ color: "#000", fontWeight: 600 }}
                    >
                      Angular Development
                    </a>
                  </div>

                  <div className="d-inline-block">
                    <div className="pt-4 d-flex align-items-center border-top">
                      <div className="content">
                        <h6 className="mb-0">
                          Let's Build a great Frontend for your project
                        </h6>
                        <i className="mdi mdi-arrow-right"></i>
                        <Link href="contact" className="text-primary">
                          Get Started
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Frontend;
