import Image from "next/image";
import Link from "next/link";
import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";

class FrontendApp extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="section bg-light">
          <Container>
            <Row className="align-items-center">
              <Col
                lg={5}
                md={{ size: 5, order: 2 }}
                xs={{ size: 12, order: 1 }}
              >
                <Image
                  src="/assets/newimages/frontendapp.png"
                  className="img-fluid mx-auto d-block"
                  alt="App Development"
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
                    App Development
                  </h4>
                  <p className="text-muted para-desc mb-0">
                    We specialize in crafting high-performance mobile
                    applications with modern technologies. Whether it's for iOS,
                    Android, or cross-platform,{" "}
                    <span className="text-primary font-weight-bold">
                      Spotless Apps
                    </span>{" "}
                    ensures top-tier quality, scalability, and user-centric
                    design.
                  </p>
                  <div className="my-4 d-flex flex-wrap align-items-center">
                    <Image
                      src="/assets/newimages/react-icon.png"
                      width="45px"
                      height="45px"
                      alt="React Native"
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
                      React Native
                    </a>
                    <Image
                      src="/assets/newimages/flutter.png"
                      width="34px"
                      height="34px"
                      alt="Flutter"
                    />
                    <a
                      href="#"
                      className="ml-1 mt-1"
                      style={{ color: "#000", fontWeight: 600 }}
                    >
                      Flutter
                    </a>
                  </div>

                  <div className="d-inline-block">
                    <div className="pt-4 d-flex align-items-center border-top">
                      <div className="content">
                        <h6 className="mb-0">
                          Let’s bring your app idea to life
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

export default FrontendApp;
