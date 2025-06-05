import Image from "next/image";
import Link from "next/link";
import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";

class BackendApp extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="section  bg-light">
          <Container>
            <Row className="align-items-center">
              <Col
                lg={6}
                md={{ size: 6, order: 1 }}
                xs={{ size: 12, order: 1 }}
                className="d-flex"
              >
                <Image
                  src="/assets/newimages/backendApp.png"
                  width="350px"
                  height="335px"
                  className="img-fluid mx-auto d-block"
                  alt="Backend"
                  style={{ maxWidth: "350px" }}
                />
              </Col>

              <Col
                lg={6}
                md={{ size: 6, order: 2 }}
                xs={{ size: 12, order: 1 }}
                className="mt-4 mt-sm-0 pt-2 pt-sm-0"
              >
                <div className="section-title">
                  <h4 className="title mb-4">Backend Development</h4>
                  <p className="text-muted para-desc mb-0">
                    Robust, scalable, and secure backends power successful apps.{" "}
                    <span className="text-primary font-weight-bold">
                      Spotless Apps
                    </span>{" "}
                    delivers high-quality server-side logic tailored for mobile
                    applications.
                  </p>
                  <div className="my-4">
                    {/* <Image src={Django} width="50px" height="30px" layout="intrinsic" /> */}
                    <Link
                      href="#"
                      className="mt-2 mr-4"
                      style={{ color: "#000" }}
                    >
                      Django Development
                    </Link>
                    {/* <Image src={Node} width="40px" height="30px" layout="intrinsic" /> */}
                    <Link
                      href="#"
                      className="mt-2 ml-1"
                      style={{ color: "#000" }}
                    >
                      Node Development
                    </Link>
                  </div>

                  <div className="d-inline-block">
                    <div className="pt-4 d-flex align-items-center border-top">
                      <div className="content">
                        <h6 className="mb-0">
                          Let's build a powerful backend for your next app
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

export default BackendApp;
