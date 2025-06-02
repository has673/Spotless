import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import Image from "next/image";
//Import Icons
import FeatherIcon from "feather-icons-react";
import Django from "../../assets/newimages/django.png";
import Node from "../../assets/newimages/Node.js_logo.png";
import BackendIcon from "../../assets/newimages/backend.png";

//Import Images
import userInterface from "../../assets/images/illustrator/user_interface.svg";

class Backend extends Component {
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
                  src={BackendIcon}
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
                    Rock-solid, reliable backend development{" "}
                    <span className="text-primary font-weight-bold">
                      Spotless Apps
                    </span>{" "}
                    ensures your business logic works as it should.
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
                          Let's Build a great Backend for your project
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

export default Backend;
